import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobPostService } from 'src/app/services/job-post.service';
@Component({
  selector: 'app-view-job-list',
  templateUrl: './view-job-list.component.html',
  styleUrls: ['./view-job-list.component.css']
})
export class ViewJobListComponent implements OnInit {
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
  setNegative() {
    this.total_no_of_records = -1
  }

  clearMessage() {
    this.message = ''
  }
}
