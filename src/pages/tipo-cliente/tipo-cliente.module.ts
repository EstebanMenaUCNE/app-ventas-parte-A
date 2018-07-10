import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoClientePage } from './tipo-cliente';

@NgModule({
  declarations: [
    TipoClientePage,
  ],
  imports: [
    IonicPageModule.forChild(TipoClientePage),
  ],
})
export class TipoClientePageModule {}
