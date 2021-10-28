'use strict';

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

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3, 'arrow function');

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retierment = 65 - age;
//     // return retierment
//     return `${firstName} retires in ${retierment} years`;
// }
// console.log(yearsUntilRetirement(1991, 'junior'));
// console.log(yearsUntilRetirement(1980, 'bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice with ${applePieces} pieces of apples, and ${orangePieces} pieces of oranges.`;
//     return juice
// }

// const myJuice = fruitProcessor(2, 3);
// console.log(myJuice)

// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

// const calcRetirement = function(age) {
//     return 65 - age
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = calcRetirement(age)

//     if(retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} has been retired for ${Math.abs(retirement)} years 💀`
//     }
// }
// // console.log(yearsUntilRetirement(1991, 'Junior'))
// console.log(yearsUntilRetirement(1950, 'Sam'))

//CODING CHALLENGE FUNCTIONS

// 1 CREATE AN ARROW FUNCTION 'calcAverage' TO CALCULATE
// THE AVERAGE OF 3 SCORES

// 2 USE THE FUNCTION TO CALCULATE THE AVERAGE FOR BOTH TEAMS

// 3 CREATE A FUNCTION 'CHECK WINNER' THAT TAKES THE AVERAGE SCORE OF EACH TEAM AS PERAMETERS
//('AVGDOLPHINS' AND 'AVGKOALAS') AND THEN LOGS THE WINNER TO THE CONSOLE,
// TOGETHER WITH THE VICTORY POINTS, ACCORDING TO THE RULE ABOVE. EXAMPLE: 
// 'KOALAS WIN (30 VS 13)'

//4 USE TEH CHECK WINNER FUNCTION TO DETERMINE THE WINNER FOR BOTH DATA 1 AND DATA 2

// 5 IGNOR DRAWS THIS TIME

//TEST DATA 1 DOLPHINS 4, 23, 71
            //KOALAS 65, 54, 49

//TEST DATA 2 DOLPHINS 85, 54, 41
            //KOALAS 23, 34, 27

// const average = (a, b, c) => (a + b + c) / 3

// const dolphinsGame1Average = average(44, 23, 71) //46
// const koalasGame1Average = average(65, 54, 49) // 56

// const dolphinsGame2Average = average(85, 54, 41) //60
// const koalasGame2Average = average(23, 34, 27) // 28

// // console.log(dolphinsGame1Average, ': dolphins')
// // console.log(koalasGame1Average, ': koalas')

// // console.log(dolphinsGame2Average, ': dolphins')
// // console.log(koalasGame2Average, ': koalas')

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if(avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     } else { 
//         console.log('There are no winners, as nobody doubled the score.') 
//     }
// }

// checkWinner(dolphinsGame1Average, koalasGame1Average, ': Game One!') //suckers
// checkWinner(dolphinsGame2Average, koalasGame2Average, ': Game Two!') // dolphins win 60 vs. 28
// checkWinner(999, 63)
//ARRAYS
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // const friends = [friend1, friend2, friend3]
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends)

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);;
// console.log(friends[friends.length - 1]);

// friends[2] = 'Junior';

// console.log(friends);

// //excercise

// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const newArray = function (years) {
//     // const age = []
//     // for(const i of years) {
//     //     let trueAge = calcAge(i);
//     //     age.push(trueAge)
//     // }
//     // return age

//     return years.map(year => calcAge(year))
// }
// console.log(newArray(years))


// ADD ELEMENT TO BACK (PUSH())
// ADD ELEMENT TO FRONT (UNSHIFT())

// const friends = ["Michael", 'Steven', 'Peter'];

// console.log(friends);
// const newLength = friends.push('Miso Cat');
// console.log(friends);
// console.log(newLength)

// friends.unshift('Pierogi pup');
// console.log(friends)


// // REMOVE ELEMENT FROM THE BACK (POP())
// // REMOVE ELEMENT FORM THE FRON (SHIFT())
// const shiftElement = friends.shift();
// const poppedElement = friends.pop()
// console.log(friends);
// console.log(poppedElement)
// console.log(shiftElement)

// console.log(friends.indexOf('Peter'))

//CODE CHALLENGE ARRAYS
// const bills = [125, 555, 44];

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }


// const findTips = (bills) => {
//     return bills.map(bill => calcTip(bill))
// }

// const findTotals = (bills) => {
//     const totals = [];
//     const tips = findTips(bills);

//     for(let i in tips) {
//         totals.push(tips[i] + bills[i]);
//     }
//     return totals;
// }

// const tips = [];

// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// console.log('tips :', tips);
// console.log('find tips :',findTips(bills))
// console.log('find totals :', findTotals(bills))

//OBJECTS


// keys also referred to as properties.
// const pierogi = {
//     firstName: 'Pierogi',
//     lastName: 'Pup',
//     age: 2021 - 2019,
//     job: 'Guard Dog',
//     friends: ['Miso', 'Mom', 'Dad', 'Curly', 'Dino']
// }



// DOT NOTATION MUST USE ACTUAL KEY NAME OR REAL PROPERTY
// BRACKET NOTATION ALLOWS FOR EXPRESSIONS
// console.log(pierogi);

// console.log(pierogi.lastName);
// console.log(pierogi['firstName']);

// const nameKey = 'Name';
// console.log(pierogi['first' + nameKey]);
// console.log(pierogi['last' + nameKey]);


//prompt creates an imput field in a pop up window.

// const interestedIn = prompt("What do you want to know about Pierogi? choose between firstName, lastName, age, job, and firends.");

// const answerToPrompt = function (answer) {
//     // if(answer) {
//         //     console.log('this is not the droid you are looking for.')
//         // } else {
//             //     console.log(pierogi[answer]);
//             // }
//             pierogi[answer] ? console.log(pierogi[answer]) : console.log('this is not the droid you are looking for.')
// }
// answerToPrompt(interestedIn)


// pierogi.tail = true;
// pierogi['location'] = 'Monument';
// console.log(pierogi)

// console.log(`${pierogi.firstName} has ${pierogi.friends.length} friends, and his best friend is called ${pierogi.friends[0]}!`)

const pierogi = {
    firstName: 'Pierogi',
    lastName: 'Pup',
    birthYear: 2019,
    job: 'Guard Dog',
    friends: ['Miso', 'Mom', 'Dad', 'Curly', 'Dino'],
    hasDriversLicense: false,
    
    // calcAge: function(birthYear) {
    //     return 2021 - birthYear
    // }

    // calcAge: function() {
    //     console.log(this, 'this is the jonas object')
    //     return 2021 - this.birthYear
    // }

    calcAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age

    },
    canDrive: function() {
        return this.hasDriversLicense ? "a" : "no" 
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.canDrive()} drivers License`
    }

}

console.log(pierogi)
console.log(pierogi.calcAge())
console.log(pierogi.age,'this is the age from this . age')
// pierogi.hasDriversLicense = true;

console.log(pierogi.getSummary())
// console.log(`${pierogi.firstName} is a ${pierogi.age}-year old ${pierogi.job}, and he has ${pierogi.canDrive()} drivers License`)