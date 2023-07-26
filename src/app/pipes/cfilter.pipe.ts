import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../jobs';
@Pipe({
  name: 'cfilter'
})
export class CfilterPipe implements PipeTransform {

  transform(Jobs: Jobs[], searchValue:string): Jobs[] {
    if (!Jobs || !searchValue){
    return Jobs;
  }
  return Jobs.filter(job =>
    job.companyname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
   
}
}


