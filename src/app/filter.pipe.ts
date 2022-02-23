import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(myFavGames: Content[], filteredType?: string): Content[] {

    filteredType = "Action";

    return myFavGames.filter(item =>{ 
      // item.type == null ? item.type == '' : item.type == "Action"
      if(filteredType) {
        return item.type == filteredType;    
      } else {
        return item.type == null;
      }
    });
  }

}
