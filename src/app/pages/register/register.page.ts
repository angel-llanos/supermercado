import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public alertcontroller : AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Se a Registrado correctamente',
      message: 'Loguear para entrar',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

}
