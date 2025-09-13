import { IReporte } from "../../Reportes/IReporte";
import { IEstrategiaEntrega } from "../IEstrategiaEntrega";

export class EntregaCarpeta implements IEstrategiaEntrega{

    entregar(reporte: IReporte): void {
        console.log('Guardando reporte en carpeta--> ', reporte.datos)
    }
}