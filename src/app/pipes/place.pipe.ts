import { Pipe, PipeTransform } from '@angular/core';
import { Applications } from '../applications';
@Pipe({
  name: 'place'
})
export class PlacePipe implements PipeTransform {

  transform(applications: Applications[], searchValue:string): Applications[] {
    if (!applications || !searchValue){
    return applications;
  }
  return applications.filter(application =>
    application.preferredplace.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
