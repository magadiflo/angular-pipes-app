import { Component } from '@angular/core';

type Genero = 'femenino' | 'masculino';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Martín';
  genero: Genero = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

}
