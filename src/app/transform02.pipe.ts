import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform02'
})
export class Transform02Pipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(x => {
      return x.category.toLowerCase().includes(searchText) || x.title.toLowerCase().includes(searchText) || x.keywords.toLowerCase().includes(searchText);
    });
  }

}
