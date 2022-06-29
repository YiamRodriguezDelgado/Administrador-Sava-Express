import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import decode from 'jwt-decode';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  user = {
    correo: '',
    password: ''
  };

  client = {
    correo: '',
    password: '',
    telefono: '',
    contacto: '',
  };

  contactOptions = {
    correoOption: 'correo',
    telefonoOption: 'telefono'
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logIn() {
    const loginForm = document.getElementById('login-form') as HTMLFormElement;
    const nonExistenceMessage = document.getElementById('non-existence');
    const wrongCredentialsMessage = document.getElementById('wrong-credentials');
    const missingCredentialsMessage = document.getElementById('missing-credentials');
    missingCredentialsMessage.classList.add('hidden');
    nonExistenceMessage.classList.add('hidden');
    wrongCredentialsMessage.classList.add('hidden');

    if (this.user.correo === '' || this.user.password === '') {
      missingCredentialsMessage.classList.remove('hidden');
    } else {
      this.authService.signIn(this.user).subscribe( (res: any) => {
        if (res.message === 'Usuario no existe') {
          nonExistenceMessage.classList.remove('hidden');
          loginForm.reset();
        } else if (res.token === 'error'){
          wrongCredentialsMessage.classList.remove('hidden');
          loginForm.reset();
        } else {
          const rol = decode(res.token);
          console.log(rol);
          if (rol['rol'] === 1) {
            console.log('Entrando');
            this.router.navigate(['dashboard']);
          } else {
            this.router.navigate(['inicio']);
          }
        }

        this.user.correo = '';
        this.user.password = '';

      });
    }
  }

  register() {
    const registerForm = document.getElementById('register-form') as HTMLFormElement;
    const registeredMessage = document.getElementById('registered');
    const missingMessage = document.getElementById('missing');
    registeredMessage.classList.add('hidden');
    missingMessage.classList.add('hidden');

    if (this.client.correo === '' || this.client.telefono === '' || this.client.password === '' || this.client.contacto === '') {
      missingMessage.classList.remove('hidden');
    } else {
      this.authService.create(this.client).subscribe( (res: any) => {
        if (res.message === 'Usuario ya registrado') {
          registeredMessage.classList.remove('hidden');
          registerForm.reset();
        } else {
          registerForm.reset();
          alert('Usuario registrado con exito');
          window.location.reload();
        }

        this.client.correo = '';
        this.client.telefono = '';
        this.client.password = '';
        this.client.contacto = '';

      });
    }

  }

}
