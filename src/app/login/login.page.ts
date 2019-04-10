import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;

  constructor(private router: Router) {
  }

  login() {
    console.log(this.email + "" + this.password)
    this.router.navigate(['home'])
  }

  reg() {
    this.router.navigate(['register'])
  }
}
