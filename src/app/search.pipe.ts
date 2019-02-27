import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText : string): any[] {
    if(!items) return [];
    if(!searchText){
        return items;
    }
    var dataToBePushed = [];
    console.log("SelectedItems", searchText.toLowerCase());
    items.map(function(item){
        if(item.biography.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
            dataToBePushed.push(item);
        }
    })
    return dataToBePushed;
   }
}