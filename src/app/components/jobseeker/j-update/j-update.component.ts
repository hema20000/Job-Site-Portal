import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {CommonService} from '../../.././services/common.service';
import {UserService} from '../../../services/user.service';
@Component({
  selector: 'app-j-update',
  templateUrl: './j-update.component.html',
  styleUrls: ['./j-update.component.css']
})
export class JUpdateComponent implements OnInit {
  _id: any
  username:any
  emailid:any
  password:any
  password2:any
  confirmpassword:any
  phoneno1:any
  phoneno2:any
  address:any
  qualification:any
  experience:any
  message=''
  comments:any
  hide=true
  constructor(private route: ActivatedRoute, private CommonService: CommonService,private jobseekerService: UserService, private router: Router) { }

  ngOnInit(): void {
    this._id = this.CommonService.get_id()
    this.username = this.CommonService.getusername()

    this.route.params.subscribe(params => {
     
      console.log(this._id);
    })
    this.jobseekerService.getUserById(this._id)
      .subscribe( data1 => {
        console.log(data1)
        this.username = data1.username;
        this.emailid  = data1.emailid;
        this.password = data1.password;
        this.phoneno1 = data1.phoneno1;
        this.phoneno2 = data1.phoneno2;
        this.address = data1.address;
        this.qualification = data1.qualification;
        this.experience = data1.experience; 
      },
      error => {
       
      });
  }

  editUser() {
    var body = "_id=" + this._id 
        + "&username=" + this.username 
        + "&emailid=" + this.emailid 
        + "&password=" + this.password
        + "&phoneno1=" + this.phoneno1
        + "&phoneno2=" + this.phoneno2
        + "&qualification=" + this.qualification
        + "&experience=" +this.experience
        + "&address=" + this.address;
    
    this.jobseekerService.updateUser(body,this._id)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['jobseekerdas']);
          alert("updated successfully")
        },
        error => {
          
        });
  }
}
