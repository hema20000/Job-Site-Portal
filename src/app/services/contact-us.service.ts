import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  api_url:string = "http://localhost:3000/v1/contact"
  constructor(private http: HttpClient,public commonService:CommonService) {}

  getContactUs()
  {

    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(this.api_url, {headers:headers});
  }

 

Contactus (body:string)
{
  let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  return this.http.post(this.api_url, body, {headers: headers, responseType:'text'});    
} 

}