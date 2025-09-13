import { IReporte } from "../../Reportes/IReporte";
import { IEstrategiaProcesamiento } from "../IEstrategiaProcesamiento";

export class EstrategiaAnalista implements IEstrategiaProcesamiento {
  procesar(reporte: IReporte): void {
    console.log("Procesamiento analista de:", reporte.datos);
  }
}