import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrice'
})
export class PipePricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value +"EGP";
  }

}
