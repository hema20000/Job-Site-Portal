import { Component, OnInit,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UploadCVService } from 'src/app/services/upload-cv.service';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.css']
})
export class UploadCVComponent implements OnInit {
  emailid:any
  uploadedFiles: Array<File>=[];
 
    constructor(private router:Router, private itemService:UploadCVService, private elementRef:ElementRef,
      private http:HttpClient, private commonService:CommonService) { 
        this.emailid=this.commonService.getemailid()
      }

  ngOnInit(): void {
  }
  fileChange(element:any) {
    this.uploadedFiles = element.target.files;
  }

  UploadCV = () => {
    
    let inputEl = this.elementRef.nativeElement.querySelector('#file1');
    var formData = new FormData();
    formData.append("emailid", this.emailid);
    formData.append('file1', inputEl.files.item(0));


    this.http.post('http://localhost:3000/v1/cv', formData).subscribe(
      
      (response) => console.log(response),
      (error) => console.log(error)
      
     
      )
      alert('UploadCV')
      this.router.navigate(['jobseekerdas']);

    
  }
}
