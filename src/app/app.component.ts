import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'martín díaz flores';
  valor: number = 1000;
  obj = {
    nombre: 'Tinkler'
  }

  mostrarNombre(): void {
    console.log(this.nombre);
    console.log(this.valor);  
  }

}
