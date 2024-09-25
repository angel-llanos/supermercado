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

    this.activedroute.queryParams.subscribe(param =>{

      if(this.router.getCurrentNavigation()?.extras.state){

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
      header: 'Eliminar producto',
      message: '¿Desea eliminar este producto?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'aceptar',
        handler: () => {
          this.presentAlert3(); // Llama a la segunda alerta desde aquí
        }
      }
    ],
    });
    await alert.present();

  }

  async presentAlert3() {
    const alert = await this.alertcontroller.create({
      header: 'Se a eliminado el Producto',
      buttons: [{
        text: 'OK',
      }
    ],
    });
    await alert.present();

  }
 
}
