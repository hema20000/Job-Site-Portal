import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UploadCVClass } from '../uploadCV-class';
import { CommonService } from "./common.service";
@Injectable({
  providedIn: 'root'
})
export class UploadCVService {
  api_url:string = "http://localhost:9000/v1/item/"

  jwtToken: string=''
  headers: any
  constructor(private http: HttpClient, public commonService:CommonService) {}

  getItems() {
   
    this.jwtToken = this.commonService.getJwtToken()
    this.headers  = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', "Authorization": this.jwtToken});
    return this.http.get(this.api_url, {headers: this.headers});
  }

  createItem(body: string) {
   
    this.jwtToken = this.commonService.getJwtToken()
    this.headers  = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', "Authorization": this.jwtToken});
    return this.http.post(this.api_url, body, {headers: this.headers, responseType:'text'});
  }

  deleteItem(itemid:any) {

    this.jwtToken = this.commonService.getJwtToken()
    this.headers  = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', "Authorization": this.jwtToken});
    return this.http.delete(this.api_url + itemid, {headers: this.headers});//Actual
  }

  getItemById(itemid:any) {
   
    this.jwtToken = this.commonService.getJwtToken()
    this.headers  = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', "Authorization": this.jwtToken});
    return this.http.get<UploadCVClass>(this.api_url + itemid, {headers: this.headers});
  }

  updateItem(body: string, itemid: string) {

    this.jwtToken = this.commonService.getJwtToken()
    this.headers  = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', "Authorization": this.jwtToken});
    return this.http.put(this.api_url + itemid, body, {headers: this.headers, responseType:'text'});
  }

}
  