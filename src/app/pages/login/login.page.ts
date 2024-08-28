import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor( public alertcontroller : AlertController) { 
    addIcons({ eye, lockClosed });}

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Se a Logueado correctamente',
      message: 'Bienvenido ',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  

}