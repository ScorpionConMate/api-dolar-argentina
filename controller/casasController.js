const dolarSiService = require('../services/dolarSiService');
const util = require('../util/util');

class CasasController {

    /**
     * @description Obtiene la cotizacion de Metropolis Compania Financiera
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarMetro(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa340.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa340.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la cotizacion de Cambio Alpe
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarAlpe(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa338.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa338.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la cotizacion de Francisco Vaccaro
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarVaccaro(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa339.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa339.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la cotizacion de Transatlantica
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarTransatlantica(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa343.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa343.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
  * @description Obtiene la cotizacion de Jonestur
  * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
  */
    async getDolarJonestur(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Mar_del_Plata.casa23.compra._text),
                venta: util.formatNumber(data.cotiza.Mar_del_Plata.casa23.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la cotizacion de La Moneta Cambio
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarMoneta(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Mar_del_Plata.casa24.compra._text),
                venta: util.formatNumber(data.cotiza.Mar_del_Plata.casa24.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la cotizacion de Mar del Plata Exchange
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarExchange(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Mar_del_Plata.casa400.compra._text),
                venta: util.formatNumber(data.cotiza.Mar_del_Plata.casa400.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la cotizacion de Daminato Viajes y Cambios
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarDaminato(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Rosario.casa28.compra._text),
                venta: util.formatNumber(data.cotiza.Rosario.casa28.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la cotizacion de Monetemar Compania Financiera
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarMontemar(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Mendoza.casa58.compra._text),
                venta: util.formatNumber(data.cotiza.Mendoza.casa58.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la cotizacion de Casa de Cambio Los Tilos
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarLosTilos(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.La_Plata.casa350.compra._text),
                venta: util.formatNumber(data.cotiza.La_Plata.casa350.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtiene la cotizacion de Maguitur
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarMaguitur(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Tucuman.casa115.compra._text),
                venta: util.formatNumber(data.cotiza.Tucuman.casa115.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

}
const casasController = new CasasController();
const casasControllerMap = {
    caba: {
        metropolis: casasController.getDolarMetro,
        alpe: casasController.getDolarAlpe,
        vaccaro: casasController.getDolarVaccaro,
        transatlantica: casasController.getDolarTransatlantica,
    },
    lp: { tilos: casasController.getDolarLosTilos },
    mdp: {
        jonestur: casasController.getDolarJonestur,
        moneta: casasController.getDolarMoneta,
        exchange: casasController.getDolarExchange,
    },
    rosario: { daminato: casasController.getDolarDaminato },
    mendoza: { montemar: casasController.getDolarMontemar },
    tucuman: { maguitur: casasController.getDolarMaguitur }
};

module.exports = {
    casasControllerMap,
    casasController
}
