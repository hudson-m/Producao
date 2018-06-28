var util = require('util');

describe('HistoricoTransacoes (model)', function() {

  describe('#find()', function() {
    it('deve retornar HistoricoTransacoes', function (done) {
        HistoricoTransacoes.find()
      .then(function(historicoTransacoes) {

        if (historicoTransacoes == null) {
          return done(new Error(
            'Deveria retornar HistoricoCustoProduto'+util.inspect(historicoTransacoes, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});