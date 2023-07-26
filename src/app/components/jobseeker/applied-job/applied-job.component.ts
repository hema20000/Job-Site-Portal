import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostService } from 'src/app/services/job-post.service';


@Component({  
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html', 
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent implements OnInit {

  jobs:any[] = []
  total_no_of_records:any
  emailid:any
  message = ''
  constructor(public jobseekerService:JobPostService,private route: ActivatedRoute) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.emailid = params['emailid'];
      console.log(this.emailid);
    })
    console.log('ngOnInit')
    this.getJobList(this.emailid)
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

  getJobList = (emailid: any) => {
    this.jobseekerService.getJobApplied(this.emailid).subscribe(
      (result) => {
        this.jobs = <any>result;
        //this.total_no_of_records = this.jobs.length
        this.total_no_of_records = this.jobs.length
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
}