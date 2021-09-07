let assert = require('assert')
let greet = require('../greet')

describe('The greet function', function(){

    it('should greet Someone, returns greeting message and name', function(){
        assert.equal('Hello, Christian', greet('Christian'));
    });
    it('should greet Someone, returns greeting message and name', function(){
      
        assert.equal('Hello, Jack', greet('Jack'));
    });
});
