import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from './jobs';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Jobs: Jobs[], searchValue:string): Jobs[] {

    if (!Jobs || !searchValue){
      return Jobs;
    }
    return Jobs.filter(job =>
      job.joblocation.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      // && job.jobname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
