import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncar',
  standalone: true
})
export class TextTruncarPipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    return value.length < maxLength ? value : value.substring(0,maxLength)+'...';
  }

}
