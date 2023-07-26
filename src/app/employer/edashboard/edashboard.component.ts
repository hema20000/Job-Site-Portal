import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-edashboard',
  templateUrl: './edashboard.component.html',
  styleUrls: ['./edashboard.component.css']
})
export class EdashboardComponent implements OnInit {

  username: any
  emailid: any
  _id:any
  companyname:any
  url:string=''
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    this.username = this.commonService.getusername()
  this.emailid = this.commonService.getemailid()
  this._id = this.commonService.get_id()
  this.companyname = this.commonService.getcompanyname()
  this.url = "/employer-jobposted/"+this.companyname
  }

}
