import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {CommonService} from '../../.././services/common.service';
import {EmployerService} from '../../../services/employer.service';


@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css']
})
export class EmpUpdateComponent implements OnInit {
  _id: any
  username:any
  companyname:any
  emailid:any
  password:any
  password2:any
  confirmpassword:any
  phoneno1:any
  phoneno2:any
  address:any
  message=''
  comments:any
  hide=true;
  constructor(private route: ActivatedRoute,private CommonService: CommonService, private employerService: EmployerService, private router: Router) { }

  ngOnInit(): void {
    this._id = this.CommonService.get_id()
    this.username = this.CommonService.getusername()

    this.route.params.subscribe(params => {
      // this._id = params['_id'];
      console.log(this._id);
    })
    this.employerService.getUserById(this._id)
      .subscribe( data1 => {
        console.log(data1)
        this.username = data1.username;
        this.companyname=data1.companyname;
        this.emailid  = data1.emailid;
        this.password = data1.password;
        this.phoneno1 = data1.phoneno1;
        this.phoneno2 = data1.phoneno2;
        this.address = data1.address;
        this.comments = data1.comments;
      },
      error => {
        
      });
  }

  editEmployer() {
    var body = "_id=" + this._id 
        + "&username=" + this.username 
        + "&companyname=" + this.companyname
        + "&emailid=" + this.emailid 
        + "&password=" + this.password
        + "&phoneno1=" + this.phoneno1
        + "&phoneno2=" + this.phoneno2
        + "&address=" + this.address
        + "&comments=" + this.comments;
    
    this.employerService.updateUser(body,this._id)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['employer-dashboard']);
          alert("updated successfully")
        },
        error => {
          
        });
  }
}