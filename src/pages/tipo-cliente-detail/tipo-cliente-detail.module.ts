import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoClienteDetailPage } from './tipo-cliente-detail';

@NgModule({
  declarations: [
    TipoClienteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoClienteDetailPage),
  ],
})
export class TipoClienteDetailPageModule {}
