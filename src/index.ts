import { ReporteFactory } from "./Reportes/ReporteFactory"

console.log('MODULO ! ----------- ')

const datos = {
    totalRegistros:20,
    totalBajas:10,
    total:11
}
const tipoReporte = "PDF";
let reporte = ReporteFactory.crearReporte(tipoReporte, datos);

reporte.generarReporte();

