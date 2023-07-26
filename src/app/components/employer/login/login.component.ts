import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide=true;
  emailid:any
  password:any
  error_message: any;


  constructor(private router: Router, private userService: EmployerService, public commonService: CommonService) { }


  ngOnInit(): void {
  }
  emplogin = () => {
    
    var body = "&emailid=" + this.emailid 
        + "&password=" + this.password;
   

    this.userService.checkValidUser(body)
      .subscribe( (data: string) => {
        console.log('Login Result / JWT Token :')
        console.log(data)
        if(data !== 'Login Failed') {// Login Successful, Got JWT Token
        


          const result = JSON.parse(data)
          this.commonService.setLoginStatus(3);
          this.commonService.set_id(result['_id']);
          this.commonService.setusername(result['username']);
          this.commonService.setemailid(result['emailid']);
          this.commonService.setpassword(result['password']);
          this.commonService.setcompanyname(result['companyname']);
      
          this.commonService.setJwtToken(result['jwtToken']);

          localStorage.setItem('jwtToken', result['jwtToken']);  
          localStorage.setItem('username', result['username']); 
          localStorage.setItem('emailid', result['emailid']); 
          localStorage.setItem('companyname', result['companyname']); 
          

          this.router.navigate(['/employer-dashboard']);// User Dashboard
        } else {
          this.error_message = data// To Show Error Message in Login Page
          alert("invalid email id or password");
        }
      });
  
}

  clearMessage() {
    this.error_message = ''
  }
}