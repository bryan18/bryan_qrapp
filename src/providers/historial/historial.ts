import { Injectable } from '@angular/core';

import { ScanData } from '../../models/scan-data.model';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ModalController } from 'ionic-angular';
import { MapaPage } from '../../pages/mapa/mapa';

/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HistorialService {

  private _historial:ScanData[] = [];

  constructor(private iab: InAppBrowser,
              private modalCtrl: ModalController) {
  }
  agregar_historial(texto:string){
    let data = new ScanData(texto);
    this._historial.unshift(data);
    console.log(this._historial);
    this.abrir_scan(0);
  }
  cargar_historial(){
    return this._historial;
  }

  abrir_scan(index:number){
    let scanData = this._historial[index];
    console.log( scanData );
    switch( scanData.tipo ){
      case "http":
      // Abrir el navegador por default
      this.iab.create(scanData.info, "_system");
      break
      case "mapa":
      this.modalCtrl.create(MapaPage, {coords: scanData.info}).present();
      break
      default:
      console.error("Tipo no soportado")
    }
  }

}
