import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(public alertcontroller : AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Su compra a sido exitosa',
      message: 'Gracias por comprar en supermonkey',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

}
