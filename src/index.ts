import { CifradoDecorador } from "./Decoradores/concretas/CifradoDecorador";
import { ConpresionDecorador } from "./Decoradores/concretas/ConpresionDecorador";
import { EncabezadoDecorador } from "./Decoradores/concretas/EscabezadoDecorador";
import { MarcaAguaDecorador } from "./Decoradores/concretas/MarcaAguaDecorador";
import { ReporteFactory } from "./Reportes/ReporteFactory"

console.log('MODULO ! ----------- ')

const datos = {
    totalRegistros:20,
    totalBajas:10,
    total:11
}
const tipoReporte = "PDF";
let reporte = ReporteFactory.crearReporte(tipoReporte, datos);


// Aplicamos los  decoradores
reporte = new EncabezadoDecorador(reporte);
reporte = new MarcaAguaDecorador(reporte);
reporte = new CifradoDecorador(reporte);
reporte = new ConpresionDecorador(reporte);


reporte.generarReporte();

