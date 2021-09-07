let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe('The countRegNumber function', function(){
    it('Should return 3 when the string "CA 182736,CY 523519,CJ 812328" is passed as input', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('Should return 1 when the string "CA 1827368" is passed as input', function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
});
