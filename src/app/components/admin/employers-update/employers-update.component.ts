import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { EmployerService } from 'src/app/services/employer.service';
@Component({
  selector: 'app-employers-update',
  templateUrl: './employers-update.component.html',
  styleUrls: ['./employers-update.component.css']
})
export class EmployersUpdateComponent implements OnInit {
  _id: any
  username: string = ''
  companyname:string=''
  emailid: string = ''
  password: string = ''
  address: string = ''
  phoneno1: string = ''
  phoneno2: string = ''
  comments:any
  blacklist:any

  constructor(private route: ActivatedRoute, private router: Router, private empService: EmployerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id'];
  })
  this.empService.getUserById(this._id)
      .subscribe(data1 => {
        console.log(data1)
        this.username = data1.username;
        this.companyname=data1.companyname;
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

  editEmployers() {
    var body = "id=" + this._id 
        + "&username=" + this.username 
        + "&companyname=" + this.companyname
        + "&emailid=" + this.emailid 
        + "&password=" + this.password
        + "&address=" + this.address
        + "&phoneno1=" + this.phoneno1
        + "&phoneno2=" + this.phoneno2
        + "&comments=" + this.comments
        + "&blacklist=" + this.blacklist;
    this.empService.updateUser(body, this._id)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['employerList']);
        },
        error => {
          alert(error);
        });

      }


}
