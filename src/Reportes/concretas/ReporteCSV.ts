import { IReporte } from "../IReporte";

export class ReporteCSV implements IReporte{

    constructor(public datos:any){}

    generarReporte():void{

        console.log('Reporte Generado en csv',this.datos)
    }
}