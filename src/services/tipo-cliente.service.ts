import { Injectable } from '@angular/core';
import { TipoCliente } from '../models/tipo-cliente';
import { Storage } from '@ionic/storage';

@Injectable()
export class TipoClienteService {
    tiposClientes: Array<TipoCliente> = [];

    constructor(public storage: Storage) {}

    getTiposClientes() {
        return this.tiposClientes;
    }

    saveTiposClientes() {
        this.storage.set('tiposClientes', this.tiposClientes)
            .then(
                success => {
                    console.log('Éxito!');
                
            }).catch(
                err => {
                    console.log('Algo salió mal');
            });
    }

    fetchTiposClientes() {
        return this.storage.get('tiposClientes')
            .then(
                (tiposClientes: TipoCliente[]) => {
                    this.tiposClientes = tiposClientes != null ? tiposClientes : [];
                    console.log('tipos clientes cargados correctamente');
                    return this.tiposClientes;
                }
            ).catch(
                err => {
                    console.log('Error al cargar tipos clientes');
                }
            );
    }
    

    createTipoCliente(tipoCliente: TipoCliente) {
        this.tiposClientes.push(tipoCliente);
        this.saveTiposClientes();
    }

    deleteTipoCliente(tipoCliente: TipoCliente) {
        this.tiposClientes.slice(this.tiposClientes.indexOf(tipoCliente), 1);
        this.saveTiposClientes();
    }

}