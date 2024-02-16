import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthentificationService } from '../services/authentification.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-resgistro-usuario',
  templateUrl: './resgistro-usuario.page.html',
  styleUrls: ['./resgistro-usuario.page.scss'],
})
export class ResgistroUsuarioPage {
  createUser: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthentificationService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.createUser = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^.{8,12}$'),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          this.passwordMatchValidator.bind(this),
        ],
      ],
    });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = this.createUser?.get('password')?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  async onSubmit() {
    try {
      if (this.createUser.valid) {
        const email = this.createUser.value.email;
        const password = this.createUser.value.password;
  
        // Intenta registrar al usuario
        await this.authService.registerUser(email, password);
  
        // Registro exitoso
        console.log('Usuario registrado exitosamente');
        await this.showAlert('Registro Exitoso', 'El usuario ha sido registrado correctamente.');
        this.navCtrl.navigateForward('/login');
      } else {
        throw new Error('Error de Validación');
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  }
  
  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  

 

  get errorControl() {
    return this.createUser?.controls;
  }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }
}