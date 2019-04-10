import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string;
  mobile: string;
  password: string;
  rePassword: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reg() {
    this.router.navigate(['login']);
  }
  login() {
    this.router.navigate(['login']);
  }
}
