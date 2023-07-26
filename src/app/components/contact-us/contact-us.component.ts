import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsService } from 'src/app/services/contact-us.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  username:any 
  emailid:any
  address:any
  phoneno:any
  subject:any
  min:any 
  preferreddatetime:any
  message:any
  total_no_of_records: any

  constructor(private router: Router, private contactusservice: ContactUsService ) { }



  ngOnInit(): void {
  }

  pastDate(){
    var tdate: any = new Date()
    var date: any = tdate.getDate()
    if(date < 10){
      date = "0" + date
    }
    var month:any = tdate.getMonth() + 1
    if(month < 10){
      month = "0" + month
    }
    var year:any = tdate.getFullYear()
    var hours:any = tdate.getHours()
    var minutes:any = tdate.getMinutes()
    this.min = year +"-"+ month +"-"+ date +"T"+ hours +":"+ minutes
    console.log(this.min)
  }
  onChange(value:any){
    var toDate:any = new Date().getTime()
    var selectDate:any = new Date(value).getTime()
    if(toDate > selectDate){
      this.preferreddatetime=""
      alert("You cannot select previous date and time")
    }
  }



  contactUs = () => { 
    var body = "username=" + this.username 
        + "&emailid=" + this.emailid
        + "&address=" + this.address
        + "&phoneno=" + this.phoneno
        + "&subject=" + this.subject
        + "&preferreddatetime=" + this.preferreddatetime
        + "&message=" + this.message;
        
        this.contactusservice.Contactus(body)
      .subscribe( data => {
        this.router.navigate(['home']);
      },
      (error) => {
        this.message = error.error
      });    
  }

  
  
  }
