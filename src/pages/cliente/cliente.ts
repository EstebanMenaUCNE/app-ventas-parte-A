import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDetailPage } from '../cliente-detail/cliente-detail';

/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {
  clientes: Array<Cliente> = [
    ];
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService: ClienteService) {
    }
    
    ngOnInit() {
      this.clienteService.fetchClientes()
        .then(
          (clientes: Cliente[]) => this.clientes = clientes
        );
    }
  
    ionViewWillEnter() {
      console.log('ionViewDidEnter ClientePage');
      this.clientes = this.clienteService.getClientes();
    }
  
    onCreateCliente() {
      this.navCtrl.push(ClienteDetailPage, false);
    }
  
    onUpdateCliente($event, cliente: Cliente) {
      this.navCtrl.push(ClienteDetailPage, cliente);
    }

}
