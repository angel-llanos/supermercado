import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { 
    addIcons({ eye, lockClosed });}

  ngOnInit() {
  }
  

}