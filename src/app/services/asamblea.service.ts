import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
    providedIn: 'root'
})
export class AsambleaService {
    constructor(private db: AngularFirestore, private message: NzMessageService) {}

    addReport(report: any) {
        this.db.collection('asambleistas').add(report);
    }

}