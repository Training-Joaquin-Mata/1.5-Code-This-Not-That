
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


// // Functions

// ///function declaration
// const loaves = makebread(7); //the function works

// function makebread(qty){

//     return '🍞'.repeat(qty); 
// }
// //Function expression

// const beers  = makeBeer(7); // makeBeer is not defined

// const makeBeer = function(qty){
//     return '🍺'.repeat(qty);
// } 

// //Parameters
// // Positional
// function makeBreakfast (main, side, drink) {
//     console.log(arguments)
//     return `Breakfast is ${main}, ${side}, and ${drink}.`;
// }

// // Named
// function makeLunch (opts) {
//     const { main, side, drink } = opts;
//     return `Lunch is ${main}, ${side}, and ${drink}.`;
// }

// // Rest params
// function makeDinner (main, ...args) {
//     console.log(main, args)
//     return `Dinner includes ${main} and ${args.join('')}.`;
// }


// makeBreakfast('🥞', '🥓', '🥛');

// makeLunch({ main: '🥙', side: '🍟', drink: '🥤' });

// makeDinner('🍜', '🥘', '🍙', '🥠', '🍑');

// //Arrow Functions
// const makeBeer = function beerFun(qty) {
//     return '🍺'.repeat(qty);
// }

// const makeWine = (qty) => '🍷'.repeat(qty);

// //Pure functions
// let global = 0;
// const impure = () => {
//     global++;
//     return global ** 2;
// }

// const pure = (x) => x ** 2;


// //HOF
// // Anonymous
// setTimeout( () => console.log('hello!'), 2000);

// // Named
// const log = () => console.log('hello');
// setTimeout(log, 2000);


// // Array Map
// [1,2,3,4].map(v => v ** 2);


// //Recursive
// const fs = require('fs');
// const { join } = require('path');

// const traverse = (dir) => {

//     const subfolders = fs.statSync(dir).isDirectory() 
//                        && fs.readdirSync(dir);

//     if (subfolders) {

//         console.log('👟👟👟 Traversing ', dir);

//         subfolders.forEach(path => {
//             const fullPath = join(dir, path);

//             traverse( fullPath );

            
//         });
//     }

// }

// traverse( process.cwd() );


// //Objects

// // literal
// const dog = { }

// // constructor
// const cat = new Object();

// // static method
// const horse = Object.create({ })

// //Get properties
// get = object.property;
// object.property = set;

// let hello;
// let world;

// // Old way 💩
// const obj = {
//     hello: hello,
//     world: world
// }

// // Modern way 👍
// const obj = {
//     hello,
//     world,
// }

// const x = 'howdy';

// const obj = {
//   [x]: 23
// }

// obj.howdy // 23
// //References
// const original = { }

// const x = original;
// const y = original;

// x === y; // true
// x === {}; // false

// x.hello = 'world';

// original.hello; // world
// y.hello; // world

// //combine objects
// const original = {
//     hello: 'world'
//  }

// const clone = Object.assign({ }, original);

// clone === original; // false

// original.hello = 'changed!';

// clone.hello; // world (did not change)

// //Spread sintax
// const clone = Object.assign({ }, original);

// const sugar = { ...original };

// const sugar = { ...original, hola: 'mundo' }; 


// //Objkect methods

// const obj = {
//     hello() {
//         console.log('yo')
//     }
//   }
  
//   obj.hello();


//   //this
//   const obj = {
//     username: 'Jeff',
//     hello() {
//       console.log(`My name is ${this.username}`)
//     }
//   }
  
//   obj.hello(); // My name is Jeff

//   const obj = {
//     username: 'Jeff',
//     hello: () => console.log(this.username)
//   }
  
//   obj.hello(); // My name is undefined


//   //Chaining
//   const game = {
//     hitpoints: 100,
//     log() {
//       console.log(`👾 ${this.hitpoints}`);
//     },
//     takeDamage() {
//       this.hitpoints -= 10;
//       this.log();
//       return this; // Required for chaining
//     },
//     heal() {
//       this.hitpoints += 10;
//       this.log();
//       return this; // Required for chaining
//     },
//   }
  
//   game.takeDamage().takeDamage().takeDamage().heal();
  
//   👾 90
//   👾 80
//   👾 70
//   👾 80


//   //constructors
//   function Boat(name) {
//     this.name = name;
//     this.created = Date.now()
  
//     this.horn = function () {
//       console.log(this.name)
//     }
//   }

//   const sally = new Boat('Sally');
// const molly = new Boat('Molly');

// sally.horn() // Sally
  
// The console

💩console.log(bar, foo);

// Wait, which variable is named foo? 

😐 console.log({ foo, bar });

// Better, but it's kinda hard to read...

😍console.table({ foo, bar });

// Noice!


console.group();

console.log(1);
console.log(2);
console.log(3);

console.groupEnd();


// verbose 💩
if (loggedIn) {
    console.error('user is logged in assertion failed');
}

// much better 😍 
console.assert(loggedIn, 'user is logged in');

console.count();
console.count();
console.count();

console.countReset(); // reset to zero

console.time();

// do stuff

console.timeLog('did stuff');


// do more stuff

console.timeLog('did more stuff');

console.timeEnd()