import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { environment } from 'src/environments/environment';
import { UserGuard } from './services/user.guard';
import { AuthentificationService } from './services/authentification.service';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore' ;
import { AsitenciaService } from '../app/services/asistencia.service'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserGuard,
    AuthentificationService,
    AsitenciaService

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}