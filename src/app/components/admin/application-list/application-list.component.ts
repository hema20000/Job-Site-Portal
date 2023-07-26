import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyForJobService } from 'src/app/services/apply-for-job.service';
import { CommonService } from 'src/app/services/common.service';

import { EmployerService } from 'src/app/services/employer.service';
import { JobPostService } from 'src/app/services/job-post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications:any[] = []
  total_no_of_records:any
  message = ''
  constructor(private commonservice:CommonService,private jobservice:ApplyForJobService, private userservice:UserService) { 
  }

  ngOnInit(): void {
    this.getapplicationlist()
    this.getUsers()
  }
  getUsers() {
    this.userservice.getUser()
  }
  getapplicationlist = () => {
    this.jobservice.getApplicationList().subscribe(
      (result) => {
        this.applications= <any>result;
        this.total_no_of_records = this.applications.length
      },

      (error) => {
        // console.log(error.name)// HttpErrorResponse, if Backend is not running
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
  
