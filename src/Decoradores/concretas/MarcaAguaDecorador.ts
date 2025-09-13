import { ReporteDecorador } from "../ReporteDecorador.abstracta";

export class MarcaAguaDecorador extends ReporteDecorador {
  get datos() { return this.reporte.datos; }
  generarReporte(): void {
    console.log("Agregando marca de agua-------");
    super.generarReporte();
  }
}
