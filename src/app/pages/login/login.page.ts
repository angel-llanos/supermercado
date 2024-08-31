import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';
import { AlertController, ToastController } from '@ionic/angular';
import {NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarioAdmin: string="admin";
  contrasenaAdmin: string="admin";
  
  usuarioCli: string ="sebastian";
  contrasenaCli: string ="04032003Se";

  usuario:string ="";
  contrasena:string="";


  constructor( public alertcontroller : AlertController, private router: Router, private toastController: ToastController) { 
    addIcons({ eye, lockClosed });
    
  }

  ngOnInit() {
  }
  async presentAlert( titulo:string,texto:string) {
    const alert = await this.alertcontroller.create({
      header: titulo,
      message: texto,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  validarusuario(){
    if (this.usuario===this.usuarioAdmin && this.contrasena===this.contrasenaAdmin){
      let navigationextras: NavigationExtras = {
        state:{
          con: this.contrasenaAdmin,
          user: this.usuarioAdmin
        }
      }
      this.presentAlert('bienvenido','Ha iniciado sesión como admin. Disfrute de Supermonkey!');
      this.router.navigate(['/productos'],navigationextras)
    }if(this.usuario===this.usuarioCli && this.contrasena===this.contrasenaCli){
      let navigationextras: NavigationExtras = {
        state:{
          con: this.contrasenaCli,
          user: this.usuarioCli
        }
      }
      this.presentAlert('bienvenido {{usuario}}','Ha iniciado sesión correctamente. Disfrute de Supermonkey!');
      this.router.navigate(['/productos'], navigationextras)
    }if (this.usuario==="" || this.contrasena===""){

      this.presentAlert('los campos estan vacios','porfavor ingrece su usuario o registrese');
      return;
    }if (this.contrasena!==this.contrasenaAdmin && this.usuario!==this.usuarioAdmin && this.contrasena!==this.contrasenaCli && this.usuario!==this.usuarioCli){
      
      this.presentAlert('usuario no existe','porfavor ingrece su usuario o registrese');
      return;
    }
  }
  async presentToast(position: 'middle', texto:string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
  

}