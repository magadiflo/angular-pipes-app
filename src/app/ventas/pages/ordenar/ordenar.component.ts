import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  isUpperCase: boolean = false;
  orderBy: string = '';
  heroes: Heroe[] = [
    { name: 'Superman', flying: true, color: Color.blue },
    { name: 'Batman', flying: false, color: Color.black },
    { name: 'Robin', flying: false, color: Color.green },
    { name: 'Daredevil', flying: false, color: Color.red },
    { name: 'Linterna Verde', flying: true, color: Color.green },
  ];

  changeOrder(value: string) {
    this.orderBy = value;
  }

}
