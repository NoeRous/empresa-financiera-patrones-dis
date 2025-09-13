import { IReporte } from "../IReporte";

export class ReportePDF implements IReporte{

    constructor(public datos:any){}

    generarReporte():void{

        console.log('Reporte Generado en pdf',this.datos)
    }
}