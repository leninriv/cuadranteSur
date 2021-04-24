import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
    providedIn: 'root'
})
export class AsambleaService {
    constructor(private db: AngularFirestore, private msg: NzMessageService) { }

    async addReport(report: any) {
        try {
            await this.db.collection('asambleistas').add(report);
            this.msg.success('Record guardado con exito!');
            return true;
        } catch (error) {
            this.msg.error('Error en la red, por favor intentar mas tarde');
        }
        return false;
    }

}