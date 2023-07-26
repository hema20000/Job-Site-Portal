import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FormGroup } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/employer/login/login.component';
import { RegisterComponent } from './components/employer/register/register.component';
import { JloginComponent } from './components/jobseeker/jlogin/jlogin.component';
import { JregisterComponent } from './components/jobseeker/jregister/jregister.component';
import { SearchComponent } from './components/search/search.component';
import { JobseekerdashboardComponent } from './components/jobseeker/jobseekerdashboard/jobseekerdashboard.component';
import { AccountsettingComponent } from './components/employer/accountsetting/accountsetting.component';
import { JacountComponent } from './components/jobseeker/jacount/jacount.component';
import { EdashboardComponent } from './employer/edashboard/edashboard.component';
import { AddJobPostComponent } from './components/employer/add-job-post/add-job-post.component';
import { ViewJobPostedComponent } from './components/employer/view-job-posted/view-job-posted.component';
import { ViewJobListComponent } from './components/admin/view-job-list/view-job-list.component';
import { EmployersListComponent } from './components/admin/employers-list/employers-list.component';
import { EmployersUpdateComponent } from './components/admin/employers-update/employers-update.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { JobseekersListComponent } from './components/admin/jobseekers-list/jobseekers-list.component';
import { JobseekersUpdateComponent } from './components/admin/jobseekers-update/jobseekers-update.component';
import { UploadCVComponent } from './components/jobseeker/upload-cv/upload-cv.component';
import { EmpUpdateComponent } from './components/employer/emp-update/emp-update.component';
import { JUpdateComponent } from './components/jobseeker/j-update/j-update.component';
import { JobListComponent } from './components/jobseeker/job-list/job-list.component';
import { AppliedJobComponent } from './components/jobseeker/applied-job/applied-job.component';
import { PostedJobComponent } from './components/employer/posted-job/posted-job.component';
import { ApplicationListComponent } from './components/admin/application-list/application-list.component';
import { JobListUpdateComponent } from './components/admin/job-list-update/job-list-update.component';
import { ViewallapplicationforperticularjobComponent } from './components/employer/viewallapplicationforperticularjob/viewallapplicationforperticularjob.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactRequestComponent } from './components/admin/contact-request/contact-request.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'contact', component:ContactUsComponent},
  { path: 'about-us', component:AboutUsComponent},
  { path: 'jacount', component:JacountComponent},
  { path: 'jobseekerdas', component:JobseekerdashboardComponent},
  { path: 'employer-login', component: LoginComponent},
  { path:'employer-register', component: RegisterComponent},
  { path:'employer-accountSetting', component:AccountsettingComponent},
  { path: 'search', component: SearchComponent},
  { path: 'admin-contactrequest', component: ContactRequestComponent},
  { path: 'jobseeker-login', component: JloginComponent},
  { path: 'jobseeker-applyforjob/:emailid', component: AppliedJobComponent},
  {path:'employer-jobposted/:companyname', component:PostedJobComponent, pathMatch:'full'},
  { path: 'employerpostedjob-jobseekerapplication/:_id',component:ViewallapplicationforperticularjobComponent, pathMatch:'full'},
  { path: 'jobseeker-joblist', component:JobListComponent},
  { path: 'jobseeker-register', component: JregisterComponent},
  { path: 'employer-dashboard', component:EdashboardComponent},
  { path: 'employer-addJobPost', component:AddJobPostComponent},
  { path: 'employer-viewJobPost',component:ViewJobPostedComponent},
  { path: 'admin-viewJobList', component:ViewJobListComponent},
  { path:'admin-DashBoard', component:AdminDashboardComponent},
  { path: 'employerList' , component:EmployersListComponent},
  { path: 'employerUpdate' , component:EmployersUpdateComponent},
  { path: 'jobseekerList' , component:JobseekersListComponent},
  { path: 'jobseekerUpdate', component:JobseekersUpdateComponent},
  { path: 'jobseeker-uploadCV', component:UploadCVComponent},
  { path: 'employer-update', component:EmpUpdateComponent},
  { path: 'jobseeker-update', component:JUpdateComponent},
  { path: 'admin-applicationList', component:ApplicationListComponent},
  { path: 'admin-joblistupdate', component:JobListUpdateComponent},
  { path: '**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
