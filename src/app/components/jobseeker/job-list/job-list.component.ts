import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { JobPostService } from 'src/app/services/job-post.service';
import { ApplyForJobService } from 'src/app/services/apply-for-job.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  _id:any
  username:any 
  emailid:any
  phoneno1:any
  phoneno2:any
  qualification:any
  experience:any
  preferredplace:any
  address:any
  approved:any
  
  jobname:string=""
  companyname:string=""
  joblocation:string=""
  date=new Date().getDate()
  month=new Date().getMonth()
  year=new Date().getFullYear()
  time=new Date().getTime()
  hour=new Date().getHours()
  min=new Date().getMinutes()
  sec=new Date().getSeconds()


  joblists: any[] = []
  total_no_of_records: any
  message = ''
  
  constructor(private jobseekerService: JobPostService, private applyJobService: ApplyForJobService, private router: Router,private commonService:CommonService) { }
 
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
  getJobList = () => {
    this.jobseekerService.getJobList().subscribe(
      (result) => {
        this.joblists = <any>result;
        this.total_no_of_records = this.joblists.length
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
  
  ngOnInit(): void {
    this.username=this.commonService.getusername()
    this.emailid=this.commonService.getemailid()
    this.phoneno1=this.commonService.getphoneno1()
    this.phoneno2=this.commonService.getphoneno2()
    this.qualification=this.commonService.getqualification()
    this.preferredplace=this.commonService.getpreferredplace()
    this.experience= this.commonService.getexperience()
    this._id=this.commonService.get_id()
    this.address=this.commonService.getaddress()
    console.log('ngOnInit')
    this.getJobList()
  }

  

  applyForjob = (jobs: any) => {         

    var body= 
     "jobid=" + jobs._id
      +"&jobname="+ jobs.jobname                                   
      +"&companyname=" + jobs.companyname
      +"&jobdescription="+jobs.jobdescription
      +"&minimumexperience="+jobs.minimumexperience
      +"&maximumexperience="+jobs.maximumexperience
      +"&joblocation="+jobs.joblocation
      +"&noticeperiod="+jobs.noticeperiod
      +"&mainskill="+jobs.mainskill
      +"&subskills="+jobs.subskills
      +"&numberofpost="+jobs.numberofpost
      +"&approved=" + jobs.approved
      
      +"&username="+this.username
      +"&emailid="+this.emailid
      +"&phoneno1="+this.phoneno1
      +"&phoneno2="+this.phoneno2
      +"&qualification="+this.qualification
      +"&experience="+this.experience
      +"&preferredplace="+this.preferredplace
      +"&address="+this.address
      +"&userid="+this._id
      +"&useridjobid="+this._id+"-"+jobs._id
      + "&datetime="+this.year+'/'+this.month+'/'+this.date+' '+this.hour+'hr:'+this.min+"min";
    
      if(this.commonService.getNoOfApplications() < this.commonService.getMaxNoOfApplications()) {
        this.applyJobService.createJob(body).subscribe(
          data => {
            
            this.commonService.incrementNoOfApplications()//++
            this.router.navigate(['jobseeker-joblist']);
            alert("applied successfully")
          },
          (error) => {
            this.message = error.error
            alert("already applied for this job")
          }
        );  
      } else {
        alert('You reached the Maximum No of Application per day, Please try tomorrow.')
      }


    
  }

  setNegative() {
    this.total_no_of_records = -1
  }

  clearMessage() {
    this.message = ''
  }

}



