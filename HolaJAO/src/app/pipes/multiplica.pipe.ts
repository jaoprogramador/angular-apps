import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplica'
})
export class MultiplicaPipe implements PipeTransform {

 // transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: number, args?: any): number {
    let x = parseFloat(args);
    return value * x;
  }

}
