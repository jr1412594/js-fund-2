'use strict';

// const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temps2 = [-7, 18];

//1 find the biggest difference from lowest temperature to greatest temperature,
// if NAN disregard value,

// iterate through array. 
// if number factor it in to see if its max or min
// re set new max or min to number 
// after iteration find absolute value difference.

// const tempAmplitude = function (array, array2) {
    
//     const totalArray = array.concat(array2)

//     let min = totalArray[0];
//     let max = totalArray[0];

//     for(let i = 1; i < totalArray.length; i++) {
//         let currentTemp = totalArray[i];

//         if(typeof currentTemp === 'number') {
//             if(currentTemp < min) min = currentTemp;
//             if (currentTemp > max) max = currentTemp;
//         }
//     }
//     const result = max - min;
//     return result;
// }

// console.log(tempAmplitude(temps, temps2));


// const measureKelvin = function() {
//     const measurement = {
//         type: "temp",
//         unit: "celsius",
//         // value: Number(prompt('Degrees celsius: ')),
//         value: 10,
//     }

//     const kelvin = measurement.value + 273;

//     return kelvin;
// }
// measureKelvin();

// // const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// // const temps2 = [-7, 18];

// const tempAmplitudeBug = function (t1, t2) {
    
//         const totalArray = t1.concat(t2)
//         console.log(totalArray)
    
//         let min = totalArray[0];
//         let max = totalArray[0];
//         // let min = 0;
//         // let max = 0;
    
//         for(let i = 0; i < totalArray.length; i++) {
//             let currentTemp = totalArray[i];
    
//             if(typeof currentTemp === 'number') {
//                 if(currentTemp < min) min = currentTemp;
//                 if (currentTemp > max) max = currentTemp;
//             }
//         }
//         console.log(max, min)
//         const result = max - min;
//         return result;
//     }

//     const amplitudeBug = tempAmplitudeBug([3,5,1], [9,4,5]);
    
//     console.log(amplitudeBug);

//function takes an array of numbers
// log to console a string containing the number and the day according to placement of number in the array
// assume the string only contains numbers

// crate function 'printForecast' ////done
// create empty template of string /// done
// iterate over array /// done
// append (number C "in" index+1 " days...") to string.
//console log template string

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];


const printForecast = function(array) {
    let forecastString = '... ';

    for(let i = 0; i < array.length; i++) {
        let currentTemp = array[i];
        forecastString += `${currentTemp}°C in ${i + 1} days... `;
    }
    console.log(forecastString);
}
printForecast(testData1);
console.log("");
printForecast(testData2);