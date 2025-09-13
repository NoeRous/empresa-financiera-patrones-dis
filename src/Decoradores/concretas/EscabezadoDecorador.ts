import { ReporteDecorador } from "../ReporteDecorador.abstracta";

export class EncabezadoDecorador extends ReporteDecorador {
  get datos() { return this.reporte.datos; }
  generarReporte(): void {
    console.log("Agregando encabezado-----:-)");
    super.generarReporte();
  }
}