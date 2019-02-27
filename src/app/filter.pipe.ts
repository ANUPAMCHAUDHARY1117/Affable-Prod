import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], selectedItems : any[]): any[] {
    if(!items) return [];
    if(selectedItems.length == 0){
        return items;
    }
    var dataToBePushed = [];
    console.log("SelectedItems", selectedItems);
    items.map(function(item){
            item.stats.interests.map(function(interest){
                for(var i=0; i<selectedItems.length; i++){
                    if(interest == selectedItems[i]){
                        var flag = true;
                        dataToBePushed.map(function(data){
                            if(data.username == item.username){
                                flag = false;
                            }
                        })
                        if(flag == true){
                        dataToBePushed.push(item);
                        }
                    }
                }
            })
    })
    return dataToBePushed;
   }
}