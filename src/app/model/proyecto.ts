/*
Proyecto: Mi porfolio
Autor: lcastillo
© Argentina Programa 2022
*/
export class Proyecto {
    id?: number;
    nombreE: string;
    descripcionE: string;
    periE: string;
    imgE: string;
    linkE: string;


    constructor(nombreE: string, descripcionE: string,periE: string, imgE: string,linkE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.periE = periE;
        this.imgE = imgE;
        this.linkE = linkE;

    }
}
