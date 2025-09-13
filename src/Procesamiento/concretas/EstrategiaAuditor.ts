import { IReporte } from "../../Reportes/IReporte";
import { IEstrategiaProcesamiento } from "../IEstrategiaProcesamiento";

export class EstrategiaAuditor implements IEstrategiaProcesamiento {
  procesar(reporte: IReporte): void {
    console.log("Procesamiento auditor detallado de:", reporte.datos);
  }
}