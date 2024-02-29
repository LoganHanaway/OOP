// adding functions as properties of objects, like the built in math object

// const add = (x,y) => x + y;
// const mult = (x,y) => x * y;
// const square = (x) => x * x;
// const power = (x,y) => x ** y;

// could add every one to the object to be referenced
// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;

// or can add it all one line
// const myMath = {add, mult, square, power};

// OR instead of pre defining the properties liike above, we can do it all at once
// const myMath = {
//     add: function(x,y){
//         return x + y;
//     },
//     mult: (x,y) => {
//         return x * y;
//     } // but sometimes arrow functions are problematic in use cases like this
// };

// one more even shorter way
const myMath = {
    add(x,y) {
        return x + y;
    },
    square(x) {
        return x * x;
    } // and so on
};




// start video 5