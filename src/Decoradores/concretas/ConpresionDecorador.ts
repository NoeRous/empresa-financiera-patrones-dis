import { ReporteDecorador } from "../ReporteDecorador.abstracta";

export class ConpresionDecorador extends ReporteDecorador {
  get datos() { return this.reporte.datos; }
  generarReporte(): void {
    console.log("Conpresión reporte//////");
    super.generarReporte();
  }
}