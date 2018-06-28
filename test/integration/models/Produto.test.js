var util = require('util');

describe('Produto (model)', function() {

  describe('#find()', function() {
    it('deve retornar Produto', function (done) {
        Produto.find()
      .then(function(produto) {

        if (produto == null) {
          return done(new Error(
            'Deveria retornar Produto'+util.inspect(produto, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});