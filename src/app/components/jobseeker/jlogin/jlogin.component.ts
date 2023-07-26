import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import {first} from "rxjs/operators";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jlogin',
  templateUrl: './jlogin.component.html',
  styleUrls: ['./jlogin.component.css']
})
export class JloginComponent implements OnInit {
  hide=true;
  emailid:any
  password:any
  phoneno1:any
  phone2:any
  qualification:any
  experience:any
  preferredplace:any
  address:any
  error_message: any;
  constructor(private router: Router, private jobseekerService: UserService, public commonService: CommonService) { }

  ngOnInit(): void {
  }

  userlogin = () => {

  //   if(this.emailid == "admin@hotelsaravana.com") {
  //     this.commonService.setLoginStatus(2);// 0 = Nobody logged in, 1 = User logged in, 2 = Admin logged in
  //     this.router.navigate(['admin-dashboard']);// Admin Dashboard
  //   } else {
  //     this.commonService.setLoginStatus(1);// 0 = Nobody logged in, 1 = User logged in, 2 = Admin logged in
  //     this.router.navigate(['dashboard']);// User Dashboard
  //   }
  // } else {
  //   this.error_message = 'Login failed due to invalid Emailid or Password'// To Show Error Message in Login Page
  // }




    if(this.emailid=="admin@amaraninfotech.com" && this.password=="admin123"){
      var body = "&emailid=" + this.emailid 
          + "&password=" + this.password;
         
      
  
      this.jobseekerService.checkValidUser(body)
        .subscribe( (data: string) => {
          console.log('Login Result / JWT Token :')
          console.log(data)
          if(data !== 'Login Failed') {// Login Successful, Got JWT Token
           
            const result = JSON.parse(data)
            this.commonService.setLoginStatus(1);
         
            this.router.navigate(['admin-DashBoard']);
          } 
          
          else {
            this.error_message = data// To Show Error Message in Login Page
            alert("invalid email or password")
          }
          });
        } 
   
    else {
    var body = "&emailid=" + this.emailid 
        + "&password=" + this.password;
   

    this.jobseekerService.checkValidUser(body)
      .subscribe( (data: string) => {
        console.log('Login Result / JWT Token :')
        console.log(data)
        if(data !== 'Login Failed') {// Login Successful, Got JWT Token
        
          const result = JSON.parse(data)
          this.commonService.setLoginStatus(2);
          this.commonService.set_id(result['_id']);
          this.commonService.setusername(result['username']);
          this.commonService.setemailid(result['emailid']);
          this.commonService.setpassword(result['password']);
          this.commonService.setphoneno1(result['phoneno1']);
          this.commonService.setphoneno2(result['phoneno2']);
            this.commonService.setqualification(result['qualification']);
            this.commonService.setexperience(result['experience']);
            this.commonService.setpreferredplace(result['preferredplace']);  
            this.commonService.setaddress(result['address']);
         
          this.commonService.setJwtToken(result['jwtToken']);

          localStorage.setItem('jwtToken', result['jwtToken']);  
          localStorage.setItem('username', result['username']); 
          localStorage.setItem('emailid', result['emailid']); 
          localStorage.setItem('phoneno1',result['phoneno1']);
            localStorage.setItem('phoneno2', result['phoneno2']); 
            localStorage.setItem('qualification', result['qualification']); 
            localStorage.setItem('experience', result['experience']); 
            localStorage.setItem('preferredplace', result['preferredplace']); 
            localStorage.setItem('address', result['address']); 
         

          this.router.navigate(['/jobseekerdas']);// User Dashboard
        } else {
          this.error_message = data// To Show Error Message in Login Page
          alert("invalid email id or password");
        }
      });
  }
}

  clearMessage() {
    this.error_message = ''
  }
}




