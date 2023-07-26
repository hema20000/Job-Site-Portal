import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobPostService } from 'src/app/services/job-post.service';
@Component({
  selector: 'app-view-job-posted',
  templateUrl: './view-job-posted.component.html',
  styleUrls: ['./view-job-posted.component.css']
})
export class ViewJobPostedComponent implements OnInit {
  job:any[] = []
  _id:any
  total_no_of_records:any
  message = ''
  constructor(private router: Router, private empService:JobPostService) {
    console.log('constructor')
    this.getJobList()
  
   }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.getJobList()
  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
  getJobList = () => {
    this.empService.getJob().subscribe(
      (result: any) => {
        this.job = <any>result;
        this.total_no_of_records = this.job.length
      },
      (error: any) => {
  
        if(error.status === 0 && error.statusText === 'Unknown Error') {
          this.message = 'Backend may be down!'// Backend may not be up and running / HttpErrorResponse
        } else if(error.status === 200 && error.statusText === 'OK') {
          this.message = error.error.text// JWT Error / Any other error
        }
      }
    );

  }

  delete1Job(job:any) {
    if(window.confirm(`Are you sure to delete the record with job name = ${job.jobname}?`)) {
      this.empService.deleteJob(job._id)
        .subscribe( data => {
          this.job = this.job.filter(u => u !== job);// Refresh the users Array / remove the deleted record from Array
        })
    }
  }

  setNegative() {
    this.total_no_of_records = -1
  }

  clearMessage() {
    this.message = ''
  }
}

