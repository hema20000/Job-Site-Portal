import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public loginStatus = 0;// 0 = not logged in, 1 = logged in
  public jwtToken = '';// JWT - Json Web Token
  public _id = '';
  public username = '';
  public emailid = '';
  public password = '';
  public companyname='';
  public phoneno1='';
  public phoneno2= '';
  public address='';
  public qualification='';
  public experience='';
  public preferredplace='';
 noOfApplications:number = 0
  maxNoOfApplications:number = 2

  constructor() { }
  incrementNoOfApplications() {
    this.noOfApplications += 1;// User Appllied for a Job
  }

  resetNoOfApplications() {
    this.noOfApplications = 0;
  }

  getNoOfApplications() {
    return this.noOfApplications;
  }

  getMaxNoOfApplications() {
    return this.maxNoOfApplications;
  }
  resetAll() {
    this.loginStatus = 0;
    this.jwtToken = '';
    this._id = '';
    this.username = '';
    this.emailid = '';
    this.password = '';
    this.companyname='';
    this.phoneno1='';
    this.phoneno2='';
    this.address='';
    this.qualification='';
    this.experience='';
    this.preferredplace='';

  }
  setLoginStatus(status : number) {
    this.loginStatus = status;
  }
  getLoginStatus() {
    return this.loginStatus
  }
  //
  setJwtToken(token : string) {
    this.jwtToken = token;
  }
  getJwtToken() {
    return this.jwtToken;
  }

  set_id(x : string) {
    this._id = x;
  }
  get_id() {
    return this._id;
  }
  //
  setusername(x : string) {
    this.username = x;
  }
  getusername() {
    return this.username;
  }
  //
  setemailid(x : string) {
    this.emailid = x;
  }
  getemailid() {
    return this.emailid;
  }
  //
  setpassword(x : string) {
    this.password = x;
  }
  getpassword() {
    return this.password;
  }

  setcompanyname(x : string) {
    this.companyname = x;
  }
  getcompanyname() {
    return this.companyname;
  }

  setphoneno1(x : any) {
    this.phoneno1 = x;
  }
  getphoneno1() {
    return this.phoneno1;
  }

  setphoneno2(x : any) {
    this.phoneno2 = x;
  }
  getphoneno2() {
    return this.phoneno2;
  }

  setaddress(x : string) {
    this.address = x;
  }
  getaddress() {
    return this.address;
  }

  setqualification(x : string) {
    this.qualification = x;
  }
  getqualification() {
    return this.qualification;
  }

  setexperience(x : any) {
    this.experience = x;
  }
  getexperience() {
    return this.experience;
  }

  setpreferredplace(x : string) {
    this.preferredplace = x;
  }
  getpreferredplace() {
    return this.preferredplace;
  }
}