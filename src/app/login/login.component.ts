import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  environment = environment;

  isLoggedIn: boolean = false;

  constructor(private storageService: LocalStorageService){
    console.log("login constructor: " + this.isLoggedIn )
    if(this.storageService.getUser() != null ){
      this.isLoggedIn = true;
    }
  }


  ngOnInit(){
    console.log("login oninit: " + this.isLoggedIn )
    if(this.storageService.getUser() != null ){
      this.isLoggedIn = true;
    }
  }
}
