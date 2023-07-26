import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-jregister',
  templateUrl: './jregister.component.html',
  styleUrls: ['./jregister.component.css']
})
export class JregisterComponent implements OnInit {

  username:any 
  emailid:any
  password:any
  password2:any
  confirmpassword:any
  phone_number1:any
  phone_number2:any
  address:any
 
  qualification:any
  experience:any
  preferredplace:any
  message=''
 hide=true;
  constructor(private router: Router, private jobseekerService: UserService) {}
      
  ngOnInit(): void {
  }
  addJobseeker = () => { 
    var body = "username=" + this.username 
        + "&emailid=" + this.emailid 
        + "&password=" + this.password
        + "&address=" + this.address
        + "&phoneno1=" + this.phone_number1
        + "&phoneno2=" + this.phone_number2
        + "&qualification=" + this.qualification
        + "&experience=" + this.experience
        + "&preferredplace=" + this.preferredplace
        + "&comments=" + ' '
        + "&blacklist=" + false;

    this.jobseekerService.createUser(body)
      .subscribe( data => {
        console.log("registered successfully!!")
        this.router.navigate(['jobseeker-login']);
      },
      (error) => {
        this.message = error.error
      });    
  }

  clearMessage() {
    this.message = ''
  }
}


