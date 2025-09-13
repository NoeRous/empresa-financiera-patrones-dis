import { IReporte } from "../Reportes/IReporte";

export abstract class ReporteDecorador implements IReporte{
    constructor(protected reporte: IReporte) {}

  abstract datos: any;

    generarReporte(): void {
    this.reporte.generarReporte();
  }
}