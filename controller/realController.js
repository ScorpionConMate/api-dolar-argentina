const dolarSiService = require('../services/dolarSiService')
const util = require('../util/util')

class RealController {
    /**
     * @description Obtener el valor del real del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getRealNacion(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Real.casa230.compra._text),
                venta: util.formatNumber(data.cotiza.Real.casa230.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del real del Banco BBVA
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getRealBBVA(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Real.casa365.compra._text),
                venta: util.formatNumber(data.cotiza.Real.casa365.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del real del Nuevo Banco del Chaco
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getRealChaco(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Real.casa366.compra._text),
                venta: util.formatNumber(data.cotiza.Real.casa366.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del real
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    async getEvolucionReal(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = util.getEvolucion(data.cotiza.evolucion_dolar.real.anio)

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

const realController = new RealController();
const realControllerMap = {
    nacion: realController.getRealNacion,
    bbva: realController.getRealBBVA,
    chaco: realController.getRealChaco,
};
module.exports = { realControllerMap, realController };
