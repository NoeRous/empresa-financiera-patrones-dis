import { IReporte } from "../../Reportes/IReporte";
import { IEstrategiaEntrega } from "../IEstrategiaEntrega";

export class EntregaCorreo implements IEstrategiaEntrega{
    entregar(reporte: IReporte): void {
        console.log('Entrega de reporte por correo ', reporte.datos)
    }
}