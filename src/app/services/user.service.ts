import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserClass } from '../user_class';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // api_url:string = "http://localhost:3000/user"
  api_url:string = "http://localhost:3000/v1/user/" 
  api_url1:string="http://localhost:3000/v1/application"
  jwtToken!: string;
  constructor(private http: HttpClient,public commonService:CommonService) { }

  getUsers() {
    return this.http.get(this.api_url);
  }
  getUser() {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get(this.api_url, {headers:headers});
  }

  createUser(body: string) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.api_url, body, {headers: headers, responseType:'text'});    
  } 

  applyJob(body: string) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.api_url1, body, {headers: headers, responseType:'text'});    
  } 

  deleteUser(userid:any) {
   
    return this.http.delete(this.api_url + userid);//Actual
  }

  getUserById(userid:any) {
    
    return this.http.get<UserClass>(this.api_url + userid);
  }

  updateUser(body: string, userid: string) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.put(this.api_url + userid, body, {headers: headers, responseType:'text'});
  }

 

  checkValidUser(body: string) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.api_url + 'login', body, {headers: headers, responseType:'text'});
  }


}



