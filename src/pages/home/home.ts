import { Component } from '@angular/core';

// Componentes
import { ToastController, Platform } from 'ionic-angular';

// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// Servicios
import { HistorialService } from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform:Platform,
              private _historialService:HistorialService) {

  }
  scan() {
    console.log("Realizando Scan....");
    if(!this.platform.is('cordova')){
      // this._historialService.agregar_historial("http://google.co.cr");
      this._historialService.agregar_historial("geo:9.848100119952804,-84.31069894387207");
      return;
    }
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
                console.log("result:", barcodeData.text);
                console.log("format:", barcodeData.format);
                console.log("cancelled:", barcodeData.cancelled);

      if ( barcodeData.text != null) {
        this._historialService.agregar_historial(barcodeData.text);
      }else{
        console.log("Cancelado o el texto esta vacío");
      }
    }, (err) => {
      console.error("Error ", err);
      this.mostrar_error("Error " +err);
    });
  }
  mostrar_error(mensaje:string){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }
}
