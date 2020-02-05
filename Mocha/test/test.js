//file structure for test.js
//A testing group named Temperature Conversion
    //Two additional testing groups nested within, named cToF & fToC
        //Each group will have three test cases, two numbers, and a non-integer test.

// var assert = require('assert');
// describe('Temperature Conversion', function() {     //part one - test group
//     describe('cToF', function(){                    //part two - two testing groups within
//     });
//     describe('fToC', function(){
//     })
// })

//assert.equal(actual, expected); - Java has built in assert assertion library, this one is used to test equality.

//part 3 - test cases
//fun fact* Fahrenheit and Celsius are equal at 40degree below zero

// var assert = require('assert');
// describe('Temperature Conversion', function() {     //part one
//     describe('cToF', function(){                    //part two
//         it('should convert -40 celsius to -40 fahrenheit', function() {
//             assert.equal(-40, cTof(-40));
//         });
//         it('should convert 32 fahrenheit to 0 celsius', function()  {
//             assert.equal(0, fToC(32));
//         });
//         it('should return undefined in no temperature is input', function() {
//             assert.equal(undefined, fToC(''));
//         });
//     });
//     describe('fToC', function(){
//     });
// });

//now we have to add the 'require' call we named in app.js to enable the files to communicate.

let convert = require('./app.js')
let assert = require('assert'); //change variable from var to let.

describe('Temperature Conversion', function() {     //part one
    describe('cToF', function(){                    //part two
        it('should convert -40 celsius to -40 fahrenheit', function() {
            assert.equal(-40, convert.cToF(-40));   //add convert to equation to be able to pull info from app.js
        });
        it('should convert 0 celsius to 32 fahrenheit', function()  {
            assert.equal(32, convert.cToF(0));
        });
        it('should return undefined if no temperature is input', function() {
            assert.equal(undefined, convert.CToF(''));
        });
    });
    describe('fToC', function() {
        it('should convert -40 fahrenheit to -40 celsius', function() {
            assert.equal(-40, convert.fToC(-40));
        });
        it('should convert 32 fahrenheit to 0 celsius', function() {
            assert.equal(0, convert.fToC(32));
        });
        it('should return undefined if no temperature is input', function() {
            assert.equal(undefined, convert.fToC('a'));
        });
    });
});