import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyForJobService } from 'src/app/services/apply-for-job.service';
import { JobPostService } from 'src/app/services/job-post.service';

@Component({
  selector: 'app-viewallapplicationforperticularjob',
  templateUrl: './viewallapplicationforperticularjob.component.html',
  styleUrls: ['./viewallapplicationforperticularjob.component.css']
})
export class ViewallapplicationforperticularjobComponent implements OnInit {

  application:any[] = []
  _id:any
  qualification:string=''
  experience:any
  preferredplace:string=''
  total_no_of_records:any
  message = ''
  constructor(private router: Router, private empService:JobPostService,private route: ActivatedRoute) {
    console.log('constructor')
   
  
   }
   ngOnInit(): void {// Life cycle hooks
    this.route.params.subscribe(params => {
      this._id = params['_id'];
      console.log(this._id);
    })
    console.log('ngOnInit')
    this.getApplicationList(this._id)
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
  getApplicationList = (jobid:any) => {
    this.empService.getJobApplicationPerUser(this._id).subscribe(
      (result: any) => {
        this.application = <any>result;
        this.total_no_of_records = this.application.length
        
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
