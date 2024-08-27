import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(public alertController : AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Se agrego un producto a tu carro.',
      message: 'Gracias por preferir a supermonkey',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
