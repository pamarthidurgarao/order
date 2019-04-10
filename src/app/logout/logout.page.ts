import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
})
export class LogoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['login']);
  }

}
