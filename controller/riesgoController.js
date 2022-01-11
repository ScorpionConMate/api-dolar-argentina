const dolarSiService = require('../services/dolarSiService');
const util = require('../util/util');

class RiesgoController {

    /**
     * @description Obtener el valor del riesgo pais
     * @returns Un objeto con el valor del riesgo pais y la fecha y hora de la consulta
     */
    async getRiesgoPais(req, res) {
        try {
            const data = await dolarSiService.getInfoDolar()
            const valores = {
                fecha: util.getDateTime(),
                valor: util.formatNumber(data.cotiza.Riesgo_pais.casa141.compra._text, 3),
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = new RiesgoController();
