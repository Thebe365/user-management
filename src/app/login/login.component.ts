import { Component } from '@angular/core';
// import { users } from '../users.json'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailAddress = ''
  password = ''

  // userList = {
  //   userName: String,
  //   lastName: String,
  //   age: Number,
  //   occupation: String,
  //   race: String
  // } = users


  emailInput(email: string){
    
    this.emailAddress = email
    return this.emailAddress;
  }

  passwordInput(pass: string){
    
    this.password = pass
    return this.password
  }

  submitForm(){
    console.log("Email: " + this.emailAddress + ", password: " + this.password)
  }
}
