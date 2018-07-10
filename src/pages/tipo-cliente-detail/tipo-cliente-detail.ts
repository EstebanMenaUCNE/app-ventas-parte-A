import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoCliente } from '../../models/tipo-cliente';
import { TipoClienteService } from '../../services/tipo-cliente.service';


@IonicPage()
@Component({
  selector: 'page-tipo-cliente-detail',
  templateUrl: 'tipo-cliente-detail.html',
})
export class TipoClienteDetailPage implements OnInit {
  tipoCliente: TipoCliente = {
    codigo: 0,
    descripcion: ''
  };
  updating = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tipoClienteService: TipoClienteService) {
  }

  ngOnInit() {
    this.cargarDatos();
    console.log('nOnInit: updating =' + this.updating);
  }

  ionViewDidLoad() {
  }

  cargarDatos() {
    
    if (this.navParams.data) {
      this.tipoCliente = this.navParams.data;
      this.updating = true;
    }
  }

  onSaveTipoCliente() {
    if (this.tipoCliente.descripcion != '') {
      if (this.updating) {
        this.updateTipoCliente()
      } else {
        this.createTipoCliente();
      }
    }
  }

  createTipoCliente() {
    this.tipoClienteService.createTipoCliente(this.tipoCliente);
    this.navCtrl.pop();
  }

  updateTipoCliente() {
    this.tipoClienteService.saveTiposClientes();
    this.navCtrl.pop();
  }

  deleteTipoCliente() {
    this.tipoClienteService.deleteTipoCliente(this.tipoCliente);
    this.navCtrl.pop();
  }

}
