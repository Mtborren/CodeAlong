//app.js contains the functions for converting fahrenheit to celsius and vice versa.

// let convert = {}; //this is used to expose/export our function to the test.js file.
// cToF = function(celsius) {      //here the only parameter in the function named cToF is celsius, the value of celsius is then converted to fahrenheit.
//     if(!Number.isInterger(celsius)) return undefined;
//     return celsius * 9 / 5 + 32;
// }

// fToC = function(fahrenheit) {   //here the only parameter in the function fToC is fahrenheit, it converts this value to celsius.
//     if(!Number.isInteger(fahrenheit)) return undefined;     //this states that if anything other than a number is entered it will return a value of undefined, otherwise it would proceed below to the equation and return the correct value.
//     return (fahrenheit -32) * 5 / 9;
// }


let convert = {}; 
//instead of using two different functions here, we're attaching the new object named convert to our existing functions as a method.
convert.cToF = function(celsius) {      
    if(!Number.isInteger(celsius)) return undefined;
    return celsius * 9 / 5 + 32;
}

convert.fToC = function(fahrenheit) { 
    if(!Number.isInteger(fahrenheit)) return undefined;     
    return (fahrenheit - 32) * 5 / 9;
}

module.exports = convert;
//module.exports is how we tell javascript what object to return as the result of a 'require' call. 'require' will be placed in test.js and change the function names used in our tests to include the convert object.