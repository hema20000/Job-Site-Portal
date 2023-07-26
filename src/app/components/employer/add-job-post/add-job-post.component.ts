import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { JobPostService } from 'src/app/services/job-post.service';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-add-job-post',
  templateUrl: './add-job-post.component.html',
  styleUrls: ['./add-job-post.component.css']
})
export class AddJobPostComponent implements OnInit {
  jobname:any
  companyname:any
  jobdescription:any
  minimumexperience:any
  maximumexperience:any
  minimumsalary:any
  maximumsalary:any
  joblocation:any
  noticeperiod:any
  mainskill:any
  subskills:any
  numberofpost:any
  message=''
  date=new Date().getDate()
  month=new Date().getMonth()
  year=new Date().getFullYear()
  time=new Date().getTime()
  hour=new Date().getHours()
  min=new Date().getMinutes()
  sec=new Date().getSeconds()

  approved:any='false'
  
  constructor(private http: HttpClient, private router: Router,private employerService:JobPostService,private commonService:CommonService) { 
    this.companyname=this.commonService.getcompanyname()
  }

  ngOnInit(): void {
  }
  addJob = () => { 
    var body = "jobname=" + this.jobname 
        + "&companyname=" + this.companyname 
        + "&jobdescription=" + this.jobdescription
        + "&minimumexperience=" + this.minimumexperience
        + "&maximumexperience=" + this.maximumexperience
        + "&minimumsalary=" + this.minimumsalary
        + "&maximumsalary=" + this.maximumsalary
        + "&joblocation=" + this.joblocation
        + "&noticeperiod=" + this.noticeperiod
        + "&mainskill=" + this.mainskill
        + "&subskills=" + this.subskills
        + "&numberofpost=" + this.numberofpost
        + "&datetime="+this.year+'/'+this.month+'/'+this.date+' '+this.hour+'hr:'+this.min+"min"
        + "&approved=" + false;

    this.employerService.createJob(body)
      .subscribe( data => {
        console.log("posted successfully!!")
        this.router.navigate(['employer-dashboard']);
      },
      (error) => {
        this.message = error.error
      });    
  }

  clearMessage() {
    this.message = ''
  }
}
