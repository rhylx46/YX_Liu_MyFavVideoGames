import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(myFavGames: Content[]): Content[] {
    return myFavGames.filter(item => item.type == null ? item.type == '' : item.type == "Action");
  }

}
