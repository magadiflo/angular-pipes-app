import { Component } from '@angular/core';

type Genero = 'femenino' | 'masculino';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //* i18nSelect
  nombre: string = 'Martín';
  genero: Genero = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //* i18nPlural
  clientes: string[] = ['María', 'Fred', 'Rosa', 'Pedro', 'Gabriel'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(): void {
    this.nombre = 'Alicia';
    this.genero = 'femenino';
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

}
