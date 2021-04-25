import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
    providedIn: 'root'
})
export class AsambleaService {
    collectionName = 'asambleistas'
    list: any[] = [];

    constructor(private db: AngularFirestore, private msg: NzMessageService) { }

    async addReport(report: any) {
        try {
            await this.db.collection(this.collectionName).add(report);
            this.msg.success('Record guardado con exito!');
            return true;
        } catch (error) {
            this.msg.error('Error en la red, por favor intentar mas tarde');
        }
        return false;
    }

    setList(list: Array<any>) {
        this.list = list;
    }

    getList() {
        return this.list;
    }

    async getItemById(id: any) {
        if (!this.list?.length) {
            await this.getRemoteReports();
        }
        return this.list.filter(item => item.id === id);
    }

    async updateReport(itemId: string, report: any) {
        try {
            await this.db.collection(this.collectionName).doc(itemId).update(report);
            this.msg.success('Record guardado con exito!');
            return true;
        } catch (error) {
            this.msg.error('Error en la red, por favor intentar mas tarde');
        }
        return false;
    }

    async getRemoteReports() {
        this.list = [];
        try {
            const remoteList = await this.db.collection(this.collectionName).get().toPromise();
            remoteList.forEach(res => {
                let item = res.data();
                item.id = res.id;
                this.list.push(item);
            });
            return this.list
        } catch (error) {
            return []
        }
    }
}