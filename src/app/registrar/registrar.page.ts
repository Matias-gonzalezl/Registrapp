import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  
  email:any
  constructor(private navCtrl: NavController, private alertController: AlertController , public authService:AuthentificationService , public route:Router) { }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login'); 
  }


    async  resetPassword (){
      this.authService.resetPassword(this.email).then(()=>{
        console.log ('contraseña restablecida');
        this.route.navigate(['/login'])
      }
      
      ).catch((error)=>{
        console.log(error) ;
      }) 
    }


  ngOnInit() {
  }

















  // ***** eva anterior
  async mostrarAlertaYRedirigir() {
    const alert = await this.alertController.create({
      header: 'Contraseña restablecida!!',
      message: 'Su nueva contraseña fue enviada a su correo electrónico',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            
            this.navCtrl.navigateForward('/login'); 
          }
        }
      ]
    });
  
    await alert.present();
  }



}
