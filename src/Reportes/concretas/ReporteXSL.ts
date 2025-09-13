
import { IReporte } from "../IReporte";

export class ReporteXLS implements IReporte{

    constructor(public datos:any){}

    generarReporte():void{

        console.log('Reporte Generado en XLS',this.datos)
    }
}