import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
apiUrl:string = "http://localhost:5555/profile"
  constructor(private http: HttpClient) { }
  createUser(body: string) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.apiUrl, body, {headers: headers, responseType:'text'});
  }
}
