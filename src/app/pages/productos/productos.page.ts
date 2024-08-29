import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(public alertcontroller : AlertController) { 
    addIcons({ library, playCircle, radio, search });
   }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Se agrego un producto a tu carro.',
      message: 'Gracias por preferir a supermonkey',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
