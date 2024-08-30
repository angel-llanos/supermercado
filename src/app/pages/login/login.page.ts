import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  usuario: string ="";
  contrasena: string ="";


  constructor( public alertcontroller : AlertController, private router: Router, private activedroute: ActivatedRoute) { 
    addIcons({ eye, lockClosed });
  
    //verificar la recepcion de los elementos
    this.activedroute.queryParams.subscribe(param =>{
      //validamos si recibe la informacion
      if(this.router.getCurrentNavigation()?.extras.state){
        //capturar la informacion
        this.contrasena = this.router.getCurrentNavigation()?.extras?.state?.['con'];
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        
      }
    });
    
  }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Bienvenido, Usuario!',
      message: 'Ha iniciado sesión correctamente. Disfrute de Supermonkey!',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  

}