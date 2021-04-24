import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  private basePath = '/asamblea';
  private curentRouteSaved = ''

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<any> {
    this.curentRouteSaved = '';
    const filePath = `${this.basePath}/${fileUpload.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.curentRouteSaved = downloadURL;
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges()
  }

  setRouteSaved(route: string) {
    this.curentRouteSaved = route;
  }

  getRouteSaved() {
    return this.curentRouteSaved;
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFiles(numberItems: any): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
}

export class FileUpload {
  key?: string;
  name?: string;
  url?: string;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}
