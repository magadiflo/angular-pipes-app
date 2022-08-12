import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = 'sin_valor'): Heroe[] {
    switch (orderBy) {
      case 'name':
        return heroes.sort((a: Heroe, b: Heroe) => a.name > b.name ? 1 : -1);
      case 'flying':
        return heroes.sort((a: Heroe, b: Heroe) => a.flying > b.flying ? 1 : -1);
      case 'color':
        return heroes.sort((a: Heroe, b: Heroe) => a.color > b.color ? 1 : -1);
      default:
        return heroes;
    }
  }

}
