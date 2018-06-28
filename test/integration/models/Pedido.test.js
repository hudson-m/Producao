var util = require('util');

describe('Pedido (model)', function() {

  describe('#find()', function() {
    it('deve retornar Pedido', function (done) {
        Pedido.find()
      .then(function(pedido) {

        if (pedido == null) {
          return done(new Error(
            'Deveria retornar Pedido'+util.inspect(pedido, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});