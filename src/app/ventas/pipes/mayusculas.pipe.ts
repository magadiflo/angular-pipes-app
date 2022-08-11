import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'mayuscula'
})
export class MayusculasPipe implements PipeTransform {

    //* Se ejecuta cuando alguien usa este pipe
    transform(value: string, enMayuscula: boolean = true): string {
        console.log(value, enMayuscula);
        return enMayuscula ? value.toUpperCase() : value.toLowerCase();
    }

}