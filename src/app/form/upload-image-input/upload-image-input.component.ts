import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSnakeCase } from 'src/utilities/global';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileUpload, UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload-image-input',
  templateUrl: './upload-image-input.component.html',
  styleUrls: ['./upload-image-input.component.scss']
})
export class UploadImageInputComponent implements OnInit {
  @Input() label: string;
  @Input() initialValue?: string;
  @Input() form: any;
  @Input() identificationCard?: string;
  @Output() public onChangeForm = new EventEmitter<any>();
  base64Image: any;
  loading = false;
  avatarUrl?: string;
  constructor(private msg: NzMessageService, public uploadService: UploadService) {
    this.label = 'image';
  }

  ngOnInit(): void {
    this.validateInitValue()
  }

  validateInitValue() {
    const field = toSnakeCase(this.label);
    if (this.form && this.form[field]) {
      this.avatarUrl = this.form[field];
    }
  }

  async uploadFile(event: any) {
    this.loading = true;
    this.avatarUrl = '';
    const fileToUpload = new FileUpload(event.target.files[0]);
    fileToUpload.name = this.identificationCard;
    this.uploadService.pushFileToStorage(fileToUpload).subscribe(
      percentage => {
        console.log('porsentaje', Math.round(percentage))
        if (Math.round(percentage) === 100) {
          setTimeout(() => {
            this.onImageSaved();
          }, 1000);
        }
      },
      error => {
        console.log(error);
        this.loading = false;
        this.msg.error('Error en la red');
      }
    );
  }

  onImageSaved() {
    if (!this.avatarUrl) {
      this.avatarUrl = this.uploadService.getRouteSaved();
      this.loading = false;
      const field = toSnakeCase(this.label);
      this.onChangeForm.emit({ field, value: this.avatarUrl });
      this.msg.success('Imagen guardada con exito!');
    }
  }




  handleChange(info: { file: NzUploadFile }): void {
    console.log('algo cambio!', info)
    // switch (info.file.status) {
    //   case 'uploading':
    //     this.loading = true;
    //     break;
    //   case 'done':
    //     // Get this url from response in real world.
    //     this.getBase64(info.file!.originFileObj!, (img: string) => {
    //       this.loading = false;
    //       this.avatarUrl = img;
    //     });
    //     break;
    //   case 'error':
    //     
    //     this.loading = false;
    //     break;
    // }
  }

}
