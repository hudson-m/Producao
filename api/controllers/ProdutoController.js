/**
 * ProdutoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    bandeira: async function(req, res){
        var bandeira = req.param('bandeira');
        if(bandeira == 0 || bandeira == 1){
            var produtos = await Produto.find({ProdutosAcabadosBandeira: bandeira});
    
            return res.json(produtos);
        }
        return res.status(500).json("bandeira invalida");    
    }
};

