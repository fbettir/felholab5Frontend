import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  environment = environment;

  isLoggedIn: boolean = false;

  constructor(private storageService: LocalStorageService){

  }

  onInit(){
    if(this.storageService.getUser() != null ){
      this.isLoggedIn = true;
    }
  }
}
