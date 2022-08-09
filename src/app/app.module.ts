import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//* Módulos personalizados
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//* Cambiar el locale de la app
import localeEsPe from "@angular/common/locales/es-PE";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsPe);
registerLocaleData(localeFr); //*Usamos el 'fr' como tercer parámetro del pipe. Ejm: {{ fecha | date:'long':'':'fr' }}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' } //* Para cambiar el idioma a toda la aplicación
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
