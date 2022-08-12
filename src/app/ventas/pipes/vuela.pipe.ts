import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '<span class="pi pi-check"></span> sí vuela' : '<span class="pi pi-times"></span> no vuela';
  }

}
