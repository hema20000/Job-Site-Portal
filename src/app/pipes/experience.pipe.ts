import { Pipe, PipeTransform } from '@angular/core';
import { Applications } from '../applications';
@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(applications: Applications[], searchValue:string): Applications[] {
    if (!applications || !searchValue){
    return applications;
  }
  return applications.filter(application =>
    application.experience.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
