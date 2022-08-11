import { NgModule } from '@angular/core';

//* PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
/**
 ** Este módulo (que agrupa los elementos de PrimeNg)
 ** únicamente lo usaremos para exportar los módulos de PrimeNg. 
 **
 ** ¿Por qué también, no lo agregamos en los imports: []?, por que en este directorio
 ** primer-ng/ correspondiente a este módulo, no tendremos ningún componente 
 ** que use los botones, cards, o cualquier otro módulo de PrimeNg.
 ** En caso que se cree algún componente, dentro de este directorio (prime-ng/),
 ** y este componente requiera usar algunos de los módulos de PrimeNg, solo en ese
 ** caso será necesario importarlo (solo el que se vaya a utilizar)
 */
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
