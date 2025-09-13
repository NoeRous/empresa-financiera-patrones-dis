import { IReporte } from "./IReporte";
import { ReporteCSV } from "./concretas/ReporteCSV";
import { ReportePDF } from "./concretas/ReportePDF";
import { ReporteXLS } from "./concretas/ReporteXSL";

export class ReporteFactory{

//=======esa es mi fabrica
    static crearReporte(tipo:string, datos:any):IReporte{

        switch(tipo){
            case "PDF": return new ReportePDF(datos);
            case "CSV": return new ReporteCSV(datos);
            case "XLS": return new ReporteXLS(datos);
            default: throw new Error('no exixte el  reporte')
        }
    }



}