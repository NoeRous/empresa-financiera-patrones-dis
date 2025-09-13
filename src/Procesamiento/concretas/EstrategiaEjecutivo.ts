import { IReporte } from "../../Reportes/IReporte";
import { IEstrategiaProcesamiento } from "../IEstrategiaProcesamiento";

export class EstrategiaEjecutivo implements IEstrategiaProcesamiento {
  procesar(reporte: IReporte): void {
    console.log("Procesamiento ejecutivo de:", reporte.datos);
  }
}