import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SitelayoutComponent } from './components/sitelayout/sitelayout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccountsettingComponent } from './components/employer/accountsetting/accountsetting.component';
import { LoginComponent } from './components/employer/login/login.component';
import { RegisterComponent } from './components/employer/register/register.component';
import { JloginComponent } from './components/jobseeker/jlogin/jlogin.component';
import { JregisterComponent } from './components/jobseeker/jregister/jregister.component';
import { SearchComponent } from './components/search/search.component';
import { FilterPipe } from './filter.pipe';
import { JobseekerdashboardComponent } from './components/jobseeker/jobseekerdashboard/jobseekerdashboard.component';
import { JacountComponent } from './components/jobseeker/jacount/jacount.component';
import { EdashboardComponent } from './employer/edashboard/edashboard.component';
import { AddJobPostComponent } from './components/employer/add-job-post/add-job-post.component';
import { ViewJobPostedComponent } from './components/employer/view-job-posted/view-job-posted.component';

import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { ViewJobListComponent } from './components/admin/view-job-list/view-job-list.component';
import { EmployersListComponent } from './components/admin/employers-list/employers-list.component';
import { EmployersUpdateComponent } from './components/admin/employers-update/employers-update.component';
import { JobseekersListComponent } from './components/admin/jobseekers-list/jobseekers-list.component';
import { JobseekersUpdateComponent } from './components/admin/jobseekers-update/jobseekers-update.component';
import { UploadCVComponent } from './components/jobseeker/upload-cv/upload-cv.component';
import { EmpUpdateComponent } from './components/employer/emp-update/emp-update.component';
import { JUpdateComponent } from './components/jobseeker/j-update/j-update.component';
import { JobListComponent } from './components/jobseeker/job-list/job-list.component';
import { AppliedJobComponent } from './components/jobseeker/applied-job/applied-job.component';
import { PostedJobComponent } from './components/employer/posted-job/posted-job.component';
import { ApplicationListComponent } from './components/admin/application-list/application-list.component';
import { CfilterPipe } from './pipes/cfilter.pipe';
import { JobListUpdateComponent } from './components/admin/job-list-update/job-list-update.component';
import { ViewallapplicationforperticularjobComponent } from './components/employer/viewallapplicationforperticularjob/viewallapplicationforperticularjob.component';
import { JfilterPipe } from './pipes/jfilter.pipe';
import { CompanynamePipe } from './pipes/companyname.pipe';

import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactRequestComponent } from './components/admin/contact-request/contact-request.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QualificationPipe } from './pipes/qualification.pipe';
import { ExperiencePipe } from './pipes/experience.pipe';
import { PlacePipe } from './pipes/place.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SitelayoutComponent,
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    LoginComponent,
    AccountsettingComponent,
    JloginComponent,
    JregisterComponent,
    SearchComponent,
    FilterPipe,
    JobseekerdashboardComponent,
    JacountComponent,
    EdashboardComponent,
    AddJobPostComponent,
    ViewJobPostedComponent,
    AdminDashboardComponent,
    ViewJobListComponent,
    EmployersListComponent,
    EmployersUpdateComponent,
    JobseekersListComponent,
    JobseekersUpdateComponent,
    UploadCVComponent,
    EmpUpdateComponent,
    JUpdateComponent,
    JobListComponent,
    AppliedJobComponent,
    PostedJobComponent,
    ApplicationListComponent,
    CfilterPipe,
    JobListUpdateComponent,
    ViewallapplicationforperticularjobComponent,
    JfilterPipe,
    CompanynamePipe,
    ContactUsComponent,
    ContactRequestComponent,
    PageNotFoundComponent,
    QualificationPipe,
    ExperiencePipe,
    PlacePipe,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [SitelayoutComponent]
})
export class AppModule { }
