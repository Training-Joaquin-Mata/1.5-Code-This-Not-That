
console.log('hello world')

/*
        PRIMITIVES

        -Boolean
        -Null
        -Undefined
        -Number
        -BigInt
        -String 
        -Symbol
*/


typeof  23; // number
typeof "foo" // string
typeof null // null

typeof {} // object
typeof [] // object
typeof function() {} // function (which inherits from object)


// Truthy vs Falsy

true; // true
!! "hello"; // true
!! -1; // true
!! []; // true
!! {}; // true

false; // false
!! null; // false
!! undefined; // false
!! 0; // false
!! ""; // false

//closures
function outer() {

    let count = 0; // persits in memory after outer is popped off the call stack

    function inner() {
        count++;
        return count;
    }

    return inner;
}

// Creates the Closure
const addOne = outer();

// Operates within its context or lexical environment
addOne(); // 1
addOne(); // 2
addOne(); // 3