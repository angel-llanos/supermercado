import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';


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


  constructor(public alertcontroller : AlertController, private router : Router, private toastController: ToastController ) { }

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
  validarUsuario(){
    if (this.nombre===""){

      this.presentToast('middle','el campo nombre esta vacio');
      return;
    }if (this.apellido===""){

      this.presentToast('middle','el campo apellido esta vacio');
      return;
    }if (this.usuario===""){

      this.presentToast('middle','el campo usuario esta vacio');
      return;
    }if (this.email===""){

      this.presentToast('middle','el campo email esta vacio');
      return;
    }if (this.contrasena===""){

      this.presentToast('middle','el campo contraseña esta vacio');
      return;
    }if (this.contrasena2===""){

      this.presentToast('middle','el campo confirmar contraseña esta vacio');
      return;
    }if (this.contrasena!=this.contrasena2){

      this.presentToast('middle','las contraseñas no coinciden');
      return;
    }else{
      this.presentAlert;
      this.router.navigate(['/login']);
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
