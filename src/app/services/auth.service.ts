import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private message: NzMessageService) { }

  async loging(email: string, password: string) {

    try {
      const firebaseUser = await this.auth.signInWithEmailAndPassword(email, password);
      console.log('firebaseUser', firebaseUser)
      return true;
    } catch (error) {
      this.logout();
      this.message.create('error', 'Usuario o contrasena incorrectos');
      console.log('error', error)
    }
    return false;
  }

  logout() {
    localStorage.setItem('cuadranteUser', '');
    this.auth.signOut();
  }
}
