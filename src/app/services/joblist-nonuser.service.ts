import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService} from "./common.service";
@Injectable({
  providedIn: 'root'
})
export class JoblistNonuserService {
  api_url:string ="http://localhost:3000/v1/nonuserjob"
  constructor(private http: HttpClient,public commonService:CommonService) { }
  getJob() {
    
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.get(this.api_url);
  }
}
