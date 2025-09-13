import { IReporte } from "../Reportes/IReporte";

export interface IEstrategiaProcesamiento{
    procesar(reporte:IReporte):void
}