import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Storage } from '@ionic/storage';

@Injectable()
export class ClienteService {
    clientes: Array<Cliente> = [];

    constructor(public storage: Storage) {}

    getClientes() {
        return this.clientes;
    }

    saveClientes() {
        this.storage.set('clientes', this.clientes)
            .then(
                success => {
                    console.log('Éxito!');
                
            }).catch(
                err => {
                    console.log('Algo salió mal');
            });
    }

    fetchClientes() {
        return this.storage.get('clientes')
            .then(
                (clientes: Cliente[]) => {
                    this.clientes = clientes != null ? clientes : [];
                    console.log('clientes cargados correctamente');
                    return this.clientes;
                }
            ).catch(
                err => {
                    console.log('Error al cargar clientes');
                }
            );
    }
    

    createCliente(cliente: Cliente) {
        this.clientes.push(cliente);
        this.saveClientes();
    }

    deleteCliente(cliente: Cliente) {
        this.clientes.slice(this.clientes.indexOf(cliente), 1);
        this.saveClientes();
    }

}