// src/Entrega/IEstrategiaEntrega.ts
import { IReporte } from "../Reportes/IReporte";

export interface IEstrategiaEntrega {
  entregar(reporte: IReporte): void;
}
