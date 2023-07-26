import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public commonService:CommonService,private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.commonService.setLoginStatus(0)
    this.commonService.setJwtToken('');// Remove the Token from CommonService
    this.router.navigate(['/home']);// Redirect to Home Page
  }
  
}
