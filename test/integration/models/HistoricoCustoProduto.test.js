var util = require('util');

describe('HistoricoCustoProduto (model)', function() {

  describe('#find()', function() {
    it('deve retornar HistoricoCustoProduto', function (done) {
        HistoricoCustoProduto.find()
      .then(function(historicoCustoProduto) {

        if (historicoCustoProduto == null) {
          return done(new Error(
            'Deveria retornar HistoricoCustoProduto'+util.inspect(historicoCustoProduto, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});