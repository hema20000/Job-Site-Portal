import { Pipe, PipeTransform } from '@angular/core';
import { Applications } from '../applications';
@Pipe({
  name: 'qualification'
})
export class QualificationPipe implements PipeTransform {

  transform(applications: Applications[], searchValue:string): Applications[] {
    if (!applications || !searchValue){
    return applications;
  }
  return applications.filter(application =>
    application.qualification.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
   
}
}