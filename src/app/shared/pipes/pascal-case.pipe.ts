import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalCase'
})
export class PascalCasePipe implements PipeTransform {

  transform(value: string | null): string | null {

    if(value == null) {
      return value;
    }
    let splitedText: string[] = value.trim().split(' ');
    let newValue: string = '';
    splitedText.forEach( _text => {
        newValue += _text[0].toLocaleUpperCase() + _text.slice(1).toLocaleLowerCase() + ' '
      }
    );
    return newValue.trim();
  }

}
