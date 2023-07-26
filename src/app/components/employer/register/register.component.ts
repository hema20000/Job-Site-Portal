import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
// import { ConfirmedValidator } from './../register/confirmed.validators';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import {EmployerService} from "./../../../services/employer.service"


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
username:any 
  emailid:any
  password:any
  password2:any
  companyname:any
  phone_number1:any
  phone_number2:any
  address:any
  message=''
  confirmpassword:any
  hide=true;

 
constructor( private http: HttpClient, private router: Router,private userService:EmployerService) {}
  ngOnInit(): void {
  }
  addUser = () => { 
    var body = "username=" + this.username
      + "&companyname=" + this.companyname 
      + "&emailid=" + this.emailid 
      + "&password=" + this.password
      + "&address=" + this.address
        + "&phoneno1=" + this.phone_number1
        + "&phoneno2=" + this.phone_number2
        + "&comments=" + ' '
        + "&blacklist=" + false;

    this.userService.createUser(body)
      .subscribe( data => {
        alert("registration successfull")
       
        this.router.navigate(['employer-login']);
      },
      (error) => {
        this.message = error.error
        alert("this email id is already exist")
      });    
  }

  clearMessage() {
    this.message = ''
  }
}