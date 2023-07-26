import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../jobs';
@Pipe({
  name: 'jfilter'
})
export class JfilterPipe implements PipeTransform {

  transform(Jobs: Jobs[], searchValue:string): Jobs[] {
    if (!Jobs || !searchValue){
    return Jobs;
  }
  return Jobs.filter(job =>
    job.jobname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
   
}
}