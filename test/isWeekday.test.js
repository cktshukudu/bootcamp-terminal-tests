let assert = require("assert")
let isWeekday = require("../isWeekday")

describe('The isWeekday function', function(){
    it('Should return True if valid day of the week is passed as input', function(){
          assert.equal(isWeekday('Monday'), true);
      });
      it('Should return False if week-end day is passed as input', function(){
          assert.equal(isWeekday('Saturday'), false);
      });
  });