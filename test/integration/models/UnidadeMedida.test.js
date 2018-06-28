var util = require('util');

describe('UnidadeMedida (model)', function() {

  describe('#find()', function() {
    it('deve retornar unidades de medida', function (done) {
      UnidadeMedida.find()
      .then(function(unidadesMedida) {

        if (unidadesMedida == null) {
          return done(new Error(
            'Deveria retornar unidades de medida'+util.inspect(unidadesMedida, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});