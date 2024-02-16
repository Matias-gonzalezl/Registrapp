import { Component } from '@angular/core';
import { GetapiService } from '../services/getapi.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})

export class ApiPage {
  getdata : any [] = [] ;
  constructor(public _services: GetapiService, private navCtrl: NavController) { 
    
    this._services.getdata<any[]>("").subscribe(data => {
    this.getdata = data 
    console.log (this.getdata)  
  }
    
    )
  }

  goToHomePage() {
    // Utiliza navCtrl para navegar a la página de inicio de sesión
    this.navCtrl.navigateForward('/home'); // Asegúrate de que la ruta sea correcta
  }

 
  }

  
