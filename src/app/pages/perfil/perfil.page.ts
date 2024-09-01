import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor( public alertcontroller : AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Modificar perfil',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo electrónico'
        },
        {
          name: 'contrasena',
          type: 'password',
          placeholder: 'Contraseña'
        },
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Aceptar',
      }
    ],
    });

    await alert.present();
  }
}
