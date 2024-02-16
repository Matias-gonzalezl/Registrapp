import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AuthentificationService } from '../services/authentification.service';
import { AsitenciaService } from '../services/asistencia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  isScanning = false;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private authService: AuthentificationService,
    private asisService: AsitenciaService
  ) {
    this.email = authService.getEmail();
  }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

  async openCam() {
    this.isScanning = true;

    const result = await BarcodeScanner.startScan();

    this.isScanning = false;

    if (result.hasContent) {
      this.registerAttendance(result.content);
    }
  }

  closeCam() {
    BarcodeScanner.stopScan();
    this.isScanning = false;
  }

  goToApiPage() {
    this.navCtrl.navigateForward('/api');
  }

  registerAttendance(qrData: string) {
    const [seccion, carrera, fecha] = qrData.split(',');
    const userEmail = this.authService.getEmail();

    if (userEmail) {
      this.asisService.registerAttendance(userEmail, seccion, carrera, fecha).then(() => {
        this.presentAlert('Asistencia registrada con éxito');
      }).catch(error => {
        this.presentAlert('Error al registrar asistencia: ' + error.message);
      });
    } else {
      this.presentAlert('Error: Usuario no autenticado');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}