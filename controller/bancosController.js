const dolarSiService = require('../services/dolarSiService');
const util = require('../util/util');

class BancosController {
    /**
     * @description Obtener las cotizaciones del Banco BBVA
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarBBVA(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar();
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa336.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa336.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Piano
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarPiano(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa37.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa37.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Hipotecario
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarHipotecario(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa217.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa217.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Galicia
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarGalicia(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa342.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa342.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Santander
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarSantander(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa401.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa401.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Ciudad de Buenos Aires
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarCiudad(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa402.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa402.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Supervielle
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarSupervielle(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa403.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa403.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Patagonia
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarPatagonia(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa404.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa404.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Comafi
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarComafi(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa405.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa405.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarNacion(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa6.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa6.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Banco Industrial
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarBIND(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa22.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa22.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Nuevo Banco del Chaco
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarChaco(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa334.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa334.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Banco de La Pampa
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarPampa(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa335.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa335.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Banco de Córdoba
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarBancor(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Capital_Federal.casa341.compra._text),
                venta: util.formatNumber(data.cotiza.Capital_Federal.casa341.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones de Mayorista Bancos
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    async getDolarMayorista(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                compra: util.formatNumber(data.cotiza.Dolar.casa44.compra._text),
                venta: util.formatNumber(data.cotiza.Dolar.casa44.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}


const bancosController = new BancosController();
const bancosControllerMap = {
    bbva: bancosController.getDolarBBVA,
    piano: bancosController.getDolarPiano,
    hipotecario: bancosController.getDolarHipotecario,
    galicia: bancosController.getDolarGalicia,
    santander: bancosController.getDolarSantander,
    ciudad: bancosController.getDolarCiudad,
    supervielle: bancosController.getDolarSupervielle,
    patagonia: bancosController.getDolarPatagonia,
    comafi: bancosController.getDolarComafi,
    nacion: bancosController.getDolarNacion,
    bind: bancosController.getDolarBIND,
    chaco: bancosController.getDolarChaco,
    pampa: bancosController.getDolarPampa,
    bancor: bancosController.getDolarBancor,
    mayorista: bancosController.getDolarMayorista,
};

module.exports = { bancosControllerMap, bancosController };
