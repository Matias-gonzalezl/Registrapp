import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private route: Router,
    private alertController: AlertController,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthentificationService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^.{8,}$'),
        ],
      ],
    });
  }
  

  get errorControl() {
    return this.loginForm?.controls;
  }

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.loginForm?.valid) {
      const user = await this.authService.loginUser(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      loading.dismiss();

      if (user) {
        this.authService.setLoggedIn(true);
        this.authService.setEmail(this.loginForm.value.email);
        this.route.navigate(['/home']);
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Credenciales incorrectas',
          message: 'Por favor, vuelva a ingresar los datos.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    } else {
      loading.dismiss();
    }
  }
}