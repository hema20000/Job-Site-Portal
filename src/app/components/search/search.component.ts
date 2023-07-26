import { Component, OnInit } from '@angular/core';
// import { JobPostService } from 'src/app/services/job-post.service';
import { JoblistNonuserService } from 'src/app/services/joblist-nonuser.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  Jobs:any[]=[]
  total_no_of_records:any
  message = ''
  joblocation:string=""
  companyname:string=""
  jobname:string=""

  constructor(private userService: JoblistNonuserService) { } //npm i ng2-search-filter

  ngOnInit(): void {
    console.log('ngOnInit')
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
    if(this.joblocation ==""){
      this.ngOnInit();
    }else{
      this.Jobs=this.Jobs.filter(res => {
        return res.joblocation.toLocaleLowerCase().match(this.joblocation.toLocaleLowerCase()) 
       
      });
    }
  }
}
