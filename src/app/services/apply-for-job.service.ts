import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ApplyForJobService {

  apiUrl:string = "http://localhost:3000/v1/application" 
  jwtToken!: string;
  constructor(private http: HttpClient, private commonService:CommonService ) { }
  
  createJob(body: any) {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.post(this.apiUrl, body, {headers: headers, responseType:'text'});
  }
  getApplicationList() {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get(this.apiUrl, {headers:headers});
  }
  
}
