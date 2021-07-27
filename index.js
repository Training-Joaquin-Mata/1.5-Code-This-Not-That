
// console.log('hello world')

// /*
//         PRIMITIVES

//         -Boolean
//         -Null
//         -Undefined
//         -Number
//         -BigInt
//         -String 
//         -Symbol
// */


// typeof  23; // number
// typeof "foo" // string
// typeof null // null

// typeof {} // object
// typeof [] // object
// typeof function() {} // function (which inherits from object)


// // Truthy vs Falsy

// true; // true
// !! "hello"; // true
// !! -1; // true
// !! []; // true
// !! {}; // true

// false; // false
// !! null; // false
// !! undefined; // false
// !! 0; // false
// !! ""; // false

// //closures
// function outer() {

//     let count = 0; // persits in memory after outer is popped off the call stack

//     function inner() {
//         count++;
//         return count;
//     }

//     return inner;
// }

// // Creates the Closure
// const addOne = outer();

// // Operates within its context or lexical environment
// addOne(); // 1
// addOne(); // 2
// addOne(); // 3


// Functions

///function declaration
const loaves = makebread(7); //the function works

function makebread(qty){

    return '🍞'.repeat(qty); 
}
//Function expression

const beers  = makeBeer(7); // makeBeer is not defined

const makeBeer = function(qty){
    return '🍺'.repeat(qty);
} 

//Parameters
// Positional
function makeBreakfast (main, side, drink) {
    console.log(arguments)
    return `Breakfast is ${main}, ${side}, and ${drink}.`;
}

// Named
function makeLunch (opts) {
    const { main, side, drink } = opts;
    return `Lunch is ${main}, ${side}, and ${drink}.`;
}

// Rest params
function makeDinner (main, ...args) {
    console.log(main, args)
    return `Dinner includes ${main} and ${args.join('')}.`;
}


makeBreakfast('🥞', '🥓', '🥛');

makeLunch({ main: '🥙', side: '🍟', drink: '🥤' });

makeDinner('🍜', '🥘', '🍙', '🥠', '🍑');

//Arrow Functions
const makeBeer = function beerFun(qty) {
    return '🍺'.repeat(qty);
}

const makeWine = (qty) => '🍷'.repeat(qty);

//Pure functions
let global = 0;
const impure = () => {
    global++;
    return global ** 2;
}

const pure = (x) => x ** 2;


//HOF
// Anonymous
setTimeout( () => console.log('hello!'), 2000);

// Named
const log = () => console.log('hello');
setTimeout(log, 2000);


// Array Map
[1,2,3,4].map(v => v ** 2);


//Recursive
const fs = require('fs');
const { join } = require('path');

const traverse = (dir) => {

    const subfolders = fs.statSync(dir).isDirectory() 
                       && fs.readdirSync(dir);

    if (subfolders) {

        console.log('👟👟👟 Traversing ', dir);

        subfolders.forEach(path => {
            const fullPath = join(dir, path);

            traverse( fullPath );

            
        });
    }

}

traverse( process.cwd() );