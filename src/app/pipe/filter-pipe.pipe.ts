import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(items: any[], filterBy: string): any {
    return items.filter((item) => item.id.indexOf(filterBy) !== -1);
  }
}
