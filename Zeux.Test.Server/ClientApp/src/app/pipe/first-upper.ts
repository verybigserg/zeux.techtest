import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firstupper' })
export class FirstUpper implements PipeTransform {
  transform(value: string): string {
    if (value.length == 0) return "";
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
