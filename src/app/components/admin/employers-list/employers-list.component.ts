import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.css']
})
export class EmployersListComponent implements OnInit {
  employers:any[] = []
  total_no_of_records:any
  message = ''
  constructor(private empService:EmployerService) { }

  ngOnInit(): void {
    this.getEmployerList()
  }
  getEmployerList = () => {
    this.empService.getUsers().subscribe(
      (result) => {
        this.employers= <any>result;
        this.total_no_of_records = this.employers.length
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

  deleteUser(employers:any) {
    if(window.confirm(`Are you sure to delete the record with Employer Name = ${employers.username}?`)) {
      this.empService.deleteUser(employers._id)
      .subscribe( data => {
        this.employers = this.employers.filter(e => e !== employers);// Refresh the users Array / remove the deleted record from Array
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
