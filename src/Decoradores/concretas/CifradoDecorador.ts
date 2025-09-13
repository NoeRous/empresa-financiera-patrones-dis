import { ReporteDecorador } from "../ReporteDecorador.abstracta";

export class CifradoDecorador extends ReporteDecorador {
  get datos() { return this.reporte.datos; }
  generarReporte(): void {
    console.log("Cifrando reporte//////");
    super.generarReporte();
  }
}