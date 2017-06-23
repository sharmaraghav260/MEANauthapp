import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;


  constructor(private ValidateService: ValidateService, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
    }

    // Require fields
    if(!this.ValidateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all required fields.', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    // Validate Email
    if(!this.ValidateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email.', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    // Validate Password
    if(!this.ValidateService.validatePassword(user.password)){
      this.flashMessage.show('Please use at least one number, one lowercase, one uppercase letter and at least six characters.', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }
  }

}
