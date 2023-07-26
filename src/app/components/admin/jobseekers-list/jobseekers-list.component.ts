import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-jobseekers-list',
  templateUrl: './jobseekers-list.component.html',
  styleUrls: ['./jobseekers-list.component.css']
})
export class JobseekersListComponent implements OnInit {
  users:any[] = []
  total_no_of_records:any
  message = ''
  constructor(private userService:UserService) {
    this.getJobseekerList()
   }

  ngOnInit(): void {
  }
  getJobseekerList = () => {
    this.userService.getUsers().subscribe(
      (result) => {
        this.users= <any>result;
        this.total_no_of_records = this.users.length
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

  deleteJobseeker(users:any) {
    if(window.confirm(`Are you sure to delete the record with Job seeker name = ${users.username}?`)) {
      this.userService.deleteUser(users._id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== users);// Refresh the users Array / remove the deleted record from Array
      })
    }

  }
  setNegative() {
    this.total_no_of_records = -1
  }

  clearMessage() {
    this.message = ''
  }
}
