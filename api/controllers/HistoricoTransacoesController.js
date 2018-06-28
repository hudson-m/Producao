/**
 * HistoricoTransacoesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  ordens: async function(req, res){
    var tipo = req.param('tipo').toUpperCase();
    if(tipo == "W" || tipo == "P" || tipo == "S"){
        var historico = await HistoricoTransacoes.find({TipoTransacao: tipo});

        return res.json(historico);
    }
    return res.status(500).json("tipo invalido");    
}
};

