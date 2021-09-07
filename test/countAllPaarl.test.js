let assert = require("assert")
let countAllPaarl = require("../countAllPaarl")

describe('The countAllPaarl function', function(){
    it('Should return 3 when the string "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123" is passed as input', function(){
          assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
      });
      it('Should return 0 when the string "CA 345 123, CL 123-546, CK 345" contains no reg number from Paarl', function(){
          assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
      });
  });
  