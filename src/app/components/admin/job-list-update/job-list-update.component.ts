import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { EmployerService } from 'src/app/services/employer.service';
import { JobPostService } from 'src/app/services/job-post.service';

@Component({
  selector: 'app-job-list-update',
  templateUrl: './job-list-update.component.html',
  styleUrls: ['./job-list-update.component.css']
})
export class JobListUpdateComponent implements OnInit {
  _id:any
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
  approved:any
  constructor(private route: ActivatedRoute,private http: HttpClient, private router: Router,private userService:JobPostService,private commonService:CommonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id'];
  })
  this.userService.getJobById(this._id)
      .subscribe(data1 => {
        console.log(data1)
        this.jobname = data1.jobname,
        this.companyname=data1.companyname,
        this.jobdescription = data1.jobdescription,
        this.minimumexperience = data1.minimumexperience,
        this.maximumexperience = data1.maximumexperience,
        this.minimumsalary = data1.minimumsalary,
        this.maximumsalary = data1.maximumsalary,
        this.joblocation= data1.joblocation,
        this.noticeperiod= data1.noticeperiod,
        this.mainskill= data1.mainskill,
        this.subskills= data1.subskills,
        this.numberofpost= data1.numberofpost,
        this.approved= data1.approved
      },
        error => {
          alert(error);

        });
  }

  editJob() {
    var body = "_id=" + this._id 
        + "&jobname=" + this.jobname
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
        + "&approved=" + this.approved
    this.userService.updateJob(body, this._id)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['admin-viewJobList']);
        },
        error => {
          alert(error);
        });

      }



}
