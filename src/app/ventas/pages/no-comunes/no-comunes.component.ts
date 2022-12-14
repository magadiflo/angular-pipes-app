import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  //* KeyValue pipe
  persona = {
    nombre: 'Martín',
    edad: 33,
    direccion: 'Perú'
  }

  //* Json pipe
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Batman', vuela: false },
    { nombre: 'Mujer Maravilla', vuela: false },
  ];

  //* Async pipe
  miObservable = interval(1000);
  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora sí ya hay promesa, se imprimió después de 3 segundos!');
    }, 3000);
  });

}
