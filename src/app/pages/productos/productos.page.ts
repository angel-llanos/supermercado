import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  usuario: string ="";
  contrasena: string ="";

  constructor(public alertcontroller : AlertController,private router: Router,private activedroute: ActivatedRoute) { 
    addIcons({ library, playCircle, radio, search });

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
      header: 'Producto agregado correctamente',
      message: 'Puedes ver este producto en el carrito.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertcontroller.create({
      header: 'eliminar producto',
      inputs: [
        {
          name: 'nombre producto',
          type: 'text',
          placeholder: 'Nombre'
        }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'aceptar',
      }
    ],
    });
    await alert.present();

  }

  async presentAlert3() {
    const alert = await this.alertcontroller.create({
      header: 'Editar Producto',
      inputs: [
        {
          name: 'nombre producto',
          type: 'text',
          placeholder: 'Nombre'
        }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'aceptar',
        handler: () => {
          this.presentAlert4('Editar producto'); // Llama a la segunda alerta desde aquí
        }
      }
    ],
    });
    await alert.present();

  }
  agregar(){

      this.presentAlert4('Agregar Producto')
  }
  async presentAlert4(titulo:string) {
    const alert = await this.alertcontroller.create({
      header: titulo,
      inputs: [
        {
          name: 'nombre producto',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'cantidad',
          type: 'number',
          placeholder: 'cantidad'
        },
        {
          name: 'Precio',
          type: 'number',
          placeholder: 'precio'
        },
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'aceptar',
      }
    ],
    });
    await alert.present();

  }
}
