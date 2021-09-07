let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('The countAllFromTown function', function(){

    it('should take a string parameter with registration numbers separated with commas and the registration number start string and It should return number registration numbers in the string that is for that town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ' ), 1)
      });
      it('should return number of registration numbers from Cape Town', function(){
        assert.equal(countAllFromTown('CA 12345, CJ 4587, CY 58461, CA 475182, CA 459613', 'CA'), 3)
      })
});