import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-jobseekers-update',
  templateUrl: './jobseekers-update.component.html',
  styleUrls: ['./jobseekers-update.component.css']
})
export class JobseekersUpdateComponent implements OnInit {
  _id: any
  username: string = ''
  emailid: string = ''
  password: string = ''
  address: string = ''
  phoneno1: string = ''
  phoneno2: string = ''
  comments:any
  blacklist:any
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id'];
    })
    this.userService.getUserById(this._id)
      .subscribe(data1 => {
        console.log(data1)
        this.username = data1.username;
        this.emailid = data1.emailid;
        this.password = data1.password;
        this.address = data1.address;
        this.phoneno1 = data1.phoneno1;
        this.phoneno2 = data1.phoneno2;
        this.comments= data1.comments;
        this.blacklist= data1.blacklist;
      },
        error => {
          alert(error);

        });
  }

  editJobseeker() {
    var body = "id=" + this._id 
        + "&username=" + this.username 
        + "&emailid=" + this.emailid 
        + "&password=" + this.password
        + "&address=" + this.address
        + "&phoneno1=" + this.phoneno1
        + "&phoneno2=" + this.phoneno2
        + "&comments=" + this.comments
        + "&blacklist=" + this.blacklist;
    this.userService.updateUser(body, this._id)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['jobseekerList']);
        },
        error => {
          alert(error);
        });

  }


}
