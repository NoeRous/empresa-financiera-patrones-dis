import { IReporte } from "../../Reportes/IReporte";
import { IEstrategiaEntrega } from "../IEstrategiaEntrega";

export class EntregaAPI implements IEstrategiaEntrega{

    entregar(reporte: IReporte): void {
        console.log("Envio de reporte via API -->",reporte.datos);
    }

}