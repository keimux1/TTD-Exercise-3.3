const assert = require("chai").assert;
const taxCalculation = require("../js/taxCalculation");

describe("testing taxCalculation function", function (){

    it("n<1200 = 0",function(){
        assert.equal(taxCalculation(12000), 0);
    });


});
