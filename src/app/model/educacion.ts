/*
Proyecto: Mi porfolio
Autor: lcastillo
© Argentina Programa 2022
*/
export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    periE: string;
    imgE: string;

    constructor(nombreE: string, descripcionE: string, periE: string, imgE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.periE = periE;
        this.imgE = imgE;
    }
}
