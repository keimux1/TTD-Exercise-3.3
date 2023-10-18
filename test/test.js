const assert = require("chai").assert;
const taxCalculation = require("../js/taxCalculation");

describe("testing taxCalculation function", function (){

    it("n<12000 = 0",function(){
        assert.equal(taxCalculation(12000), 0);
    });

    it("12000<n<=36000",function(){
        assert.equal(taxCalculation(20000),16000);
    });

});
