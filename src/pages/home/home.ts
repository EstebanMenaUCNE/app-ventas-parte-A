import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipoClientePage } from '../tipo-cliente/tipo-cliente';
import { ClientePage } from '../cliente/cliente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onTiposClientes() {
    this.navCtrl.push(TipoClientePage);
  }
  
  onClientes() {
    this.navCtrl.push(ClientePage);
  }

}
