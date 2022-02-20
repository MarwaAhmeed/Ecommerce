import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCount'
})
export class PipeCountPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value)
    if(value){
      return "inStock";
    }
   else
   {
     return "Not Available"
   }
  }

}
