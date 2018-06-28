var util = require('util');

describe('MotivoSucata (model)', function() {

  describe('#find()', function() {
    it('deve retornar MotivoSucata', function (done) {
        MotivoSucata.find()
      .then(function(motivoSucata) {

        if (motivoSucata == null) {
          return done(new Error(
            'Deveria retornar MotivoSucata'+util.inspect(motivoSucata, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});