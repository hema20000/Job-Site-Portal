import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../jobs';

@Pipe({
  name: 'companyname'
})
export class CompanynamePipe implements PipeTransform {
  Jobs: any

  transform(Jobs: Jobs[], searchValue:string): Jobs[] {

    if (!Jobs || !searchValue){
      return Jobs;
    }
    return Jobs.filter(job =>
      job.joblocation.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      job.companyname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      job.jobname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    
      );
  }
}

