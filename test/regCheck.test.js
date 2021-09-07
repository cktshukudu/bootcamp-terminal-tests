let assert = require("assert")
let regCheck = require("../regCheck")

describe('The regCheck function', function(){
    it('should check if a registration number is for GP, L, EC, MP registration plates and It takes two parameters and return a boolean.:', function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
        

   
    });
});