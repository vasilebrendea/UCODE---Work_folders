const alg = require('../sum2Numbers.js');
const assert = require('assert');

module.exports = {
    MyHelper: require('../sum2Numbers.js')
}

describe('SUM 2 numbers', () => {
    it('add 2 numbers -- v1 ', () => {
        console.log(alg);
        console.log("ssss788ss5ss");
        const c = alg.sum(2, 5);
        assert.equal(c, 7);
    });

    it('add 2 numbers -- v2 ', () => {
        const c = alg.sum(null, 5);
        assert.equal(c, 5);
    });

    it('sum array -- v3 ', () => {
        const c = alg.sumArray([1, 3]);
        assert.equal(c, 4);
    });

    it('sum array -- v4 ', () => {
        const c = alg.sumArray();
        assert.equal(c, 0);
    });

}); //http://instant-eyedropper.com/

describe('biggest sequence of equal numbers', () => {
    //arr = [7,2,2,2,3,4,4,4] ==> [2,2,2]
    //      [1,1,2,3,1,1,2,3] ==> [2,2,2] [4,4,4]  
    //       0 1 2 3 4 5 6 7  
    //       3 ,7

    it('convert array no input', () => {
        const response = alg.convertArray();
        assert.equal(response.length, 0);
    });

    it('convert array 1 lenght', () => {
        var input = [7];
        const response = alg.convertArray(input);
        // console.log(JSON.stringify(input));
        // console.log(JSON.stringify(response));
        assert.equal(JSON.stringify(response), JSON.stringify([1]));
    });

    it('convert array multiple values', () => {
        var input = [7,2,2,2,3,4,4,4];
        const response = alg.convertArray(input,0);
        // console.log(JSON.stringify(input));
        // console.log(JSON.stringify(response));
        assert.equal(JSON.stringify(response), JSON.stringify([1,1,2,3,1,1,2,3]));
    });

    it('return max value', () => {
        var input = [7,2,2,2,3,4,4,4];
        const response = alg.max(input);
        // console.log(JSON.stringify(input));
        // console.log(JSON.stringify(response));
        assert.equal(response, 7);
    });

    it('return positionOfMaxNumbers value', () => {
        var input = [1,1,2,3,1,1,2,3];
        const response = alg.positionOfMaxNumbers(input);
        // console.log(JSON.stringify(input));
        // console.log(JSON.stringify(response));
        assert.equal(JSON.stringify(response), JSON.stringify([3,7]));
    });

    it('return positionOfMaxNumbers value test 2', () => {
        var input = [7,7];
        const response = alg.positionOfMaxNumbers(input);
        // console.log(JSON.stringify(input));
        // console.log(JSON.stringify(response));
        assert.equal(JSON.stringify(response), JSON.stringify([0,1]));
    });

    it('biggest sequences', () => {
        var input = [7,2,2,2,3,4,4,4]; // ==> 222 , 444
        const response = alg.biggestSequense(input);
        // console.log(JSON.stringify(input));
        // console.log(JSON.stringify(response));
        var expectedResponse = [];
        expectedResponse.push([2,2,2]);
        expectedResponse.push([4,4,4]);
        assert.equal(JSON.stringify(response), JSON.stringify(expectedResponse));
    });
    it('biggest sequences test 2', () => {
        var input = [1,2,3,1,1,1]; // ==> 1,2,3
        //0 --egal, 
        //1 --consecutiv
        //2 -- prime

        const response = alg.biggestSequense(input,1);
        // console.log(JSON.stringify(input));
        // console.log(JSON.stringify(response));
        var expectedResponse = [];
        expectedResponse.push([1,2,3]);
        assert.equal(JSON.stringify(response), JSON.stringify(expectedResponse));
    });


    

}); //http://instant-eyedropper.com/