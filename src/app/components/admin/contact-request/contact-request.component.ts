import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-request',
  templateUrl: './contact-request.component.html',
  styleUrls: ['./contact-request.component.css']
})
export class ContactRequestComponent implements OnInit {

  Contact:any[] = []
  total_no_of_records:any
  message = ''
  constructor(private adminService:ContactUsService) { }

  ngOnInit(): void {
    this.getEmployerList()
  }
  getEmployerList = () => {
    this.adminService.getContactUs().subscribe(
      (result) => {
        this.Contact= <any>result;
        this.total_no_of_records = this.Contact.length
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
  setNegative() {
    this.total_no_of_records = -1
  }

  clearMessage() {
    this.message = ''
  }
}
