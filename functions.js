// always use 'use strict'; at the beginning of the javascript file

'use strict';
// declaration
// function modulus(params) {
// modulus2('some stuff');
// }
// expression
// const isEven = function(param){
//     const result = param % 2 === 0;
//     console.log(result);
//     return result; 
// }

// const wellIsIt = isEven(10);
// console.log(wellIsIt);


// const adder = function(param1, param2) {
//     const result = param1 + param2
//     return result;
// };

// const addTogether =adder(10, 15);
// console.log(addTogether);


// const subtractor = function(param1, param2) {
//     const result = param1 - param2
//     return result;
// };

// const difference =subtractor(10, 5);
// console.log(difference);

const mathTeacher = {
    name: 'Brandon',
    good: false,
    adder: function(param1, param2) {
        const result = param1 + param2
        return result;
        },
};
console.log(mathTeacher.adder(1, 2));