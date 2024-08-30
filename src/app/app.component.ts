import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public alertcontroller : AlertController) {}

  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Hasta pronto, Usuario!',
      message: 'Su sesión se ha cerrado exitosamente.',
      buttons: ['Aceptar'],
    });
  
    await alert.present();
  }

}
