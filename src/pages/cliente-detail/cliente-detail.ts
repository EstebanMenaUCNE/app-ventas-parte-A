import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { TipoCliente } from '../../models/tipo-cliente';
import { TipoClienteService } from '../../services/tipo-cliente.service';

/**
 * Generated class for the ClienteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-detail',
  templateUrl: 'cliente-detail.html',
})
export class ClienteDetailPage {
  cliente: Cliente = {
    codigo: 0,
    nombres: '',
    apellidos: '',
    tipo: ''
  };
  tiposClientes: TipoCliente[];
  updating = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService: ClienteService, public tipoClienteService: TipoClienteService) {
  }

  ngOnInit() {
    this.cargarDatos();
  }

  ionViewDidLoad() {
  }

  cargarDatos() {
    if (this.navParams.data) {
      this.cliente = this.navParams.data;
      this.updating = true;
    }
    this.tiposClientes = this.tipoClienteService.getTiposClientes();
  }

  onSaveCliente() {
    if (this.cliente.nombres != '' && this.cliente.apellidos != '') {
      if (this.updating) {
        this.updateCliente()
      } else {
        this.createCliente();
      }
    }
  }

  createCliente() {
    this.clienteService.createCliente(this.cliente);
    this.navCtrl.pop();
  }

  updateCliente() {
    this.clienteService.saveClientes();
    this.navCtrl.pop();
  }

  deleteCliente() {
    this.clienteService.deleteCliente(this.cliente);
    this.navCtrl.pop();
  }

}
