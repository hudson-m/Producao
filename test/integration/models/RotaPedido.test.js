var util = require('util');

describe('RotaPedido (model)', function() {

  describe('#find()', function() {
    it('deve retornar RotaPedido', function (done) {
        RotaPedido.find()
      .then(function(rotaPedido) {

        if (rotaPedido == null) {
          return done(new Error(
            'Deveria retornar RotaPedido'+util.inspect(rotaPedido, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});