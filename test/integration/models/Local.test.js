var util = require('util');

describe('Local (model)', function() {

  describe('#find()', function() {
    it('deve retornar Local', function (done) {
        Local.find()
      .then(function(local) {

        if (local == null) {
          return done(new Error(
            'Deveria retornar Local'+util.inspect(local, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });
});