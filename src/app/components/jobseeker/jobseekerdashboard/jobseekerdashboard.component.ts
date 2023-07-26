import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/jobs';
import { CommonService } from 'src/app/services/common.service';
import { JobPostService } from 'src/app/services/job-post.service';
@Component({
  selector: 'app-jobseekerdashboard',
  templateUrl: './jobseekerdashboard.component.html',
  styleUrls: ['./jobseekerdashboard.component.css']
})
export class JobseekerdashboardComponent implements OnInit {

  _id : any;
  emailid:any;
  url:string=''

  Jobs:any[]=[]
  total_no_of_records:any
  message = ''
  joblocation:string=''
  jobname:string=''
  constructor(private userService: JobPostService,public commonService:CommonService) { }

  ngOnInit(): void {
    console.log('ngOnInit')
    this._id = this.commonService.get_id()
    this.emailid = this.commonService.getemailid()
    this.url = "/jobseeker-applyforjob/"+this.emailid
    this.getJobList()
  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
  getJobList = () => {
    this.userService.getJob().subscribe(
      (result) => {
        this.Jobs = <any>result;
        this.total_no_of_records = this.Jobs.length
      },
      (error) => {
        
        if(error.status === 0 && error.statusText === 'Unknown Error') {
          this.message = 'Backend may be down!'// Backend may not be up and running / HttpErrorResponse
        } else if(error.status === 200 && error.statusText === 'OK') {
          this.message = error.error.text// JWT Error / Any other error
        }
      }
    );

  }
  
  setNegative() {
    this.total_no_of_records = -1
  }
  clearMessage() {
    this.message = ''
  }
  
  Search(){
    if(this.joblocation  == ""){
      this.ngOnInit();
    }else{
      this.Jobs=this.Jobs.filter(res => {
        return res.joblocation.toLocaleLowerCase().match(this.joblocation.toLocaleLowerCase()) 
        
      });
    }
  }
}
