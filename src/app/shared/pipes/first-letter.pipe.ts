import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string | null): string | null {
    if(value == null) {
      return value;
    }
    return value[0];
  }

}
