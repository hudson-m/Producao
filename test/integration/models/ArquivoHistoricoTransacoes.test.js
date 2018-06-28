var util = require('util');

describe('ArquivoHistoricoTransacoes (model)', function() {

  describe('#find()', function() {
    it('deve retornar ArquivoHistoricoTransacoes', function (done) {
        ArquivoHistoricoTransacoes.find()
      .then(function(arquivoHistoricoTransacoes) {

        if (arquivoHistoricoTransacoes == null) {
          return done(new Error(
            'Deveria retornar ArquivoHistoricoTransacoes'+util.inspect(arquivoHistoricoTransacoes, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});