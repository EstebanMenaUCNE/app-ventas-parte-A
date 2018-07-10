import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoCliente } from '../../models/tipo-cliente';
import { TipoClienteDetailPage } from '../tipo-cliente-detail/tipo-cliente-detail';
import { TipoClienteService } from '../../services/tipo-cliente.service';

@IonicPage()
@Component({
  selector: 'page-tipo-cliente',
  templateUrl: 'tipo-cliente.html'
})
export class TipoClientePage implements OnInit {
  tiposClientes: Array<TipoCliente> = [
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tipoClienteService: TipoClienteService) {
  }
  
  ngOnInit() {
    this.tipoClienteService.fetchTiposClientes()
      .then(
        (tiposClientes: TipoCliente[]) => this.tiposClientes = tiposClientes
      );
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad TipoClientePage');
    this.tiposClientes = this.tipoClienteService.getTiposClientes();
  }

  onCreateTipoCliente() {
    this.navCtrl.push(TipoClienteDetailPage, false);
  }

  onUpdateTipoCliente($event, tipoCliente: TipoCliente) {
    this.navCtrl.push(TipoClienteDetailPage, tipoCliente);
  }

}