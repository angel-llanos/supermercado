import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombre: string = "";
  apellido: string = "";
  usuario: string = "";
  email: string ="";
  contrasena: string = "";
  contrasena2: string ="";


  constructor(public alertcontroller : AlertController, private router : Router ) { }

  ngOnInit() {
  }
  MandarDatos(){
    let navigationextras: NavigationExtras = {
      state:{
        con: this.contrasena,
        ape: this.apellido,
        user: this.usuario,
        ema: this.email,
        nom: this.nombre
      }
    }
    this.router.navigate(['/login'], navigationextras);
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
