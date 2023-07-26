import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService} from "./common.service";
import { Jobs } from '../jobs';
@Injectable({
  providedIn: 'root'
})
export class JobPostService {
  
  api_url:string ="http://localhost:3000/v1/job/"
  base_url2:string = "http://localhost:3000/v1/application/peruser/"
  base_url:string = "http://localhost:3000/v1/job/percompany/"
  base_url3:string = "http://localhost:3000/v1/application/perjob/"
  app_url:string="http://localhost:3000/v1/perjob/"
  adminjob_url:string="http://localhost:3000/v1/job/foradmin"
  jwtToken: string='';
  constructor(private http: HttpClient,public commonService:CommonService) { }

  getJobList() {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get(this.api_url, {headers:headers});
  }
  getJob() {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get(this.adminjob_url,{headers:headers});
  }
  getJobsForAdmin(){
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get(this.base_url,{headers:headers});
  }
  
  getJobs(companyname:any) {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get(this.base_url+companyname,{headers:headers});
  }

  getAppliedJobs(id:any) {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get(this.app_url+id,{headers:headers});
  }
   
  getJobApplied(emailid:any) {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get(this.base_url2+emailid,{headers:headers});
  }

  getJobApplicationPerUser(jobid:any) {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get(this.base_url3+jobid,{headers:headers});
  }
  

  createJob(body: string) {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.post(this.api_url, body, {headers: headers, responseType:'text'});    
  } 
  deleteJob(jobid:any) {
    return this.http.delete(this.api_url + jobid);
  }
  getJobById(jobid:any) {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.get<Jobs>(this.api_url + jobid,{headers:headers});
  }

  updateJob(body: string, jobid: any) {
    this.jwtToken = this.commonService.getJwtToken()
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Authorization":this.jwtToken});
    return this.http.put(this.api_url + jobid, body, {headers: headers, responseType:'text'});
  }
}
