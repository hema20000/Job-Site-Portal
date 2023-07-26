import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { JobPostService } from 'src/app/services/job-post.service';
@Component({
  selector: 'app-posted-job',
  templateUrl: './posted-job.component.html',
  styleUrls: ['./posted-job.component.css']
})
export class PostedJobComponent implements OnInit {

  jobs:any[] = []
  total_no_of_records:any
  message = ''
  companyname:any
  _id:any
  constructor(private empService:EmployerService,public jobService:JobPostService,private route: ActivatedRoute) {
    console.log('constructor')
    
  }

  ngOnInit(): void {// Life cycle hooks
    this.route.params.subscribe(params => {
      this.companyname = params['companyname'];
      console.log(this.companyname);
    })
    console.log('ngOnInit')
    this.getJobList(this.companyname)
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

  getJobList = (companyname: any) => {
    this.jobService.getJobs(this.companyname).subscribe(
      (result) => {
        this.jobs = <any>result;
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
