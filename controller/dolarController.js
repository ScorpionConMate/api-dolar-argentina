const dolarSiService = require('../services/dolarSiService');
const util = require('../util/util');

class DolarController {

    /**
     * @description Obtener todos los valores
     * @returns Todos los valores
     */
    async getAllValues(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = { valores: data.cotiza }
            res.send(valores)

        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del dolar oficial
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarOficial(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Dolar.casa344.compra._text),
                venta: util.formatNumber(data.cotiza.Dolar.casa344.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }


    /**
     * @description Obtener el valor del dolar blue
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarBlue(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Dolar.casa380.compra._text),
                venta: util.formatNumber(data.cotiza.Dolar.casa380.venta._text)
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener el valor del dolar contado con liqui
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getContadoConLiqui(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.valores_principales.casa312.compra._text),
                venta: util.formatNumber(data.cotiza.valores_principales.casa312.venta._text)
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener el valor del dolar promedio
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarPromedio(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.cotizador.casa302.compra._text),
                venta: util.formatNumber(data.cotiza.cotizador.casa302.venta._text)
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener el valor del dolar bolsa
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarBolsa(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.valores_principales.casa313.compra._text),
                venta: util.formatNumber(data.cotiza.valores_principales.casa313.venta._text)
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del dolar oficial
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    async getEvolucionDolarOficial(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = util.getEvolucion(data.cotiza.evolucion_dolar.oficial.anio)

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del dolar blue
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    async getEvolucionDolarBlue(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = util.getEvolucion(data.cotiza.evolucion_dolar.blue.anio)

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene el valor para la venta del dolar turista
     * @returns Un objeto con el valor de venta y la fecha y hora de la consulta.
    */
    async getDolarTurista(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar();

            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(
                    data.cotiza.valores_principales.casa406.compra._text
                ),
                venta: util.formatNumber(
                    data.cotiza.valores_principales.casa406.venta._text
                ),
            };

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }
}
const dolarController = new DolarController();
const dolarControllerMap = {
    oficial: dolarController.getDolarOficial,
    blue: dolarController.getDolarBlue,
    contadoliqui: dolarController.getContadoConLiqui,
    promedio: dolarController.getDolarPromedio,
    bolsa: dolarController.getDolarBolsa,
    turista: dolarController.getDolarTurista,
};
module.exports = { dolarControllerMap, dolarController };
