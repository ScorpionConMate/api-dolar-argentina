const dolarSiService = require('../services/dolarSiService');
const util = require('../util/util');

class BcraController {
    /**
     * @description Obtener el valor de las reservas del BCRA expresadas en dólares.
     * @returns Un objeto con el valor de las reservas, la moneda y la fecha-hora de la consulta
     */
    async getReservas(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            let reservasDolares = util.formatNumber(data.cotiza.Reservas_y_circulante.casa394.compra._text)
            if (reservasDolares !== '?') {
                reservasDolares = BigInt(reservasDolares * 1000) * BigInt(1000000)
            }
            const valores = {
                fecha: util.getDateTime(),
                valor: reservasDolares.toString(),
                moneda: "USD"
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
 * @description Obtener el valor del total circulante expresado en pesos argentinos.
 * @returns Un objeto con el valor del circulante, la moneda y la fecha-hora de la consulta
 */
    async getCirculante(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            let circulantePesos = util.formatNumber(data.cotiza.Reservas_y_circulante.casa395.compra._text)
            if (circulantePesos !== '?') {
                circulantePesos = BigInt(circulantePesos * 1000) * BigInt(1000000)
            }
            const valores = {
                fecha: util.getDateTime(),
                valor: circulantePesos.toString(),
                moneda: "ARS"
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

const bcraController = new BcraController();
const bcraControllerMap = {
    reservas: bcraController.getReservas,
    circulante: bcraController.getCirculante,
};
module.exports = { bcraControllerMap, bcraController };
