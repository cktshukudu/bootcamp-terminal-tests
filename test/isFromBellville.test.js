let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should returns True if registration starts with CY ', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should returns false if registration does not starts with CY', function(){
        assert.equal(false, isFromBellville('CA 123'));
    });
});
