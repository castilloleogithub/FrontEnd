/*
Proyecto: Mi porfolio
Autor: lcastillo
© Argentina Programa 2022
*/
export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;

    constructor(nombreE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }
}
