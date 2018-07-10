import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TipoClientePage } from '../pages/tipo-cliente/tipo-cliente';
import { TipoClienteDetailPage } from '../pages/tipo-cliente-detail/tipo-cliente-detail';
import { TipoClienteService } from '../services/tipo-cliente.service';
import { ClientePage } from '../pages/cliente/cliente';
import { ClienteDetailPage } from '../pages/cliente-detail/cliente-detail';
import { ClienteService } from '../services/cliente.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TipoClientePage,
    TipoClienteDetailPage,
    ClientePage,
    ClienteDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TipoClientePage,
    TipoClienteDetailPage,
    ClientePage,
    ClienteDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TipoClienteService,
    ClienteService
  ]
})
export class AppModule {}
