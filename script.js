// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if(hasDriversLicense) {
//     console.log("I can drive!")
// }

// const interface = "Audio"
// const private = '420'

// 
// function declaration
// function calcAge1(year) {
//     return 2037 - year;
// }

// // function declaration
// function calcTrueAge(year, birthYear) {
//     return year - birthYear
// }

// age1 = calcAge1(2021);
// console.log(age1)

// myAge = calcTrueAge(2021, 1987)
// console.log(myAge)

// //function expression (function with no name) anonymous function

// //functions are values. so we can store it in a variable
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991)
// console.log(age1, age2, 'this is the expression')

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3, 'arrow function');

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retierment = 65 - age;
    // return retierment
    return `${firstName} retires in ${retierment} years`;
}
console.log(yearsUntilRetirement(1991, 'junior'));
console.log(yearsUntilRetirement(1980, 'bob'));

