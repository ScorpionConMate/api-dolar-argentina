const dolarSiService = require('../services/dolarSiService');
const util = require('../util/util');

class EuroController {
    /**
     * @description Obtener el valor del euro del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getEuroNacion(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Euro.casa176.compra._text),
                venta: util.formatNumber(data.cotiza.Euro.casa176.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Galicia
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getEuroGalicia(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Euro.casa356.compra._text),
                venta: util.formatNumber(data.cotiza.Euro.casa356.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco BBVA
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getEuroBBVA(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Euro.casa358.compra._text),
                venta: util.formatNumber(data.cotiza.Euro.casa358.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco de la Pampa
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getEuroPampa(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Euro.casa359.compra._text),
                venta: util.formatNumber(data.cotiza.Euro.casa359.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Nuevo Banco del Chaco
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getEuroChaco(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Euro.casa360.compra._text),
                venta: util.formatNumber(data.cotiza.Euro.casa360.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Hipotecario
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getEuroHipotecario(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Euro.casa361.compra._text),
                venta: util.formatNumber(data.cotiza.Euro.casa361.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del euro
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    async getEvolucionEuro(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = util.getEvolucion(data.cotiza.evolucion_dolar.euro.anio)

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

const euroController = new EuroController();
const euroControllerMap = {
    nacion: euroController.getEuroNacion,
    galicia: euroController.getEuroGalicia,
    bbva: euroController.getEuroBBVA,
    pampa: euroController.getEuroPampa,
    chaco: euroController.getEuroChaco,
    hipotecario: euroController.getEuroHipotecario,
};

module.exports = {
    euroControllerMap,
    euroController
}
