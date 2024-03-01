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
// this and methods

function getHypotenuse(a,b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
function getArea(a,b) {
    return a * b / 2;
}

// let side1 = 4;
// let side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// const area = getArea(side1, side2);

// instead of having to constantly having to reset the variables 
// we can create a new object

const rightTriangle = {
    a: 9,
    b: 12,
    printThis: function() {
        console.log(this);
    },
    getArea: function(){
        return this.a * this.b / 2;
    },
    getHypotenuse: function() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
};
// cannot use arrow functions here because this keyword behaves differently



// start video 6
// constructor functions and new

