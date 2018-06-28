var util = require('util');

describe('FaturaMateriais (model)', function() {

  describe('#find()', function() {
    it('deve retornar FaturaMateriais', function (done) {
        FaturaMateriais.find()
      .then(function(faturaMateriais) {

        if (faturaMateriais == null) {
          return done(new Error(
            'Deveria retornar FaturaMateriais'+util.inspect(faturaMateriais, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});