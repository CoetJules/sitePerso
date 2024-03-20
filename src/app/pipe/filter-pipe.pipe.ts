import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    //console.log('Filter searchText : ' + searchText);
    searchText = searchText.toLowerCase();

    //console.log('Filter items : ' + items.toString());
    console.log('Filter items');
    return items.filter((it) => {
      //console.log('Filer it : ' + it);
      //return it.toLowerCase().includes(searchText);
      let rIt = it.name.toLocaleLowerCase().includes(searchText);
      return rIt;
    });
  }
}
