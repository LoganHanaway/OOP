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
// const myMath = {
//     add(x,y) {
//         return x + y;
//     },
//     square(x) {
//         return x * x;
//     } // and so on
// };




// start video 5
// this and methods

// function getHypotenuse(a,b) {
//     return Math.sqrt(a ** 2 + b ** 2);
// }
// function getArea(a,b) {
//     return a * b / 2;
// }

// let side1 = 4;
// let side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// const area = getArea(side1, side2);

// instead of having to constantly having to reset the variables 
// we can create a new object

// const rightTriangle = {
//     a: 9,
//     b: 12,
//     printThis: function() {
//         console.log(this);
//     },
//     getArea: function(){
//         return this.a * this.b / 2;
//     },
//     getHypotenuse: function() {
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     }
// };
// cannot use arrow functions here because this keyword behaves differently



// start video 6
// constructor functions and new
// use uppercase onthe first letter here
// the goal is to make a repeatable patter

// function Triangle(a,b){
//     this.a = a,
//     this.b = b,
//     this.getArea = function(){
//         return this.a * this.b / 2;
//     },
//     this.getHypotenuse = function() {
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     };
// } 

// use the new operator ( IE new Set)
// const t1 = new Triangle(3,4)
// const t2 = new Triangle(9,12)
// t1.getHypotenuse() // 5
// t2.getHypotenuse() // 15

// check documentation to see what new does in detail




// start OPTIONAL video 7
// breif intro to prototypes

// same stuff as above just different variable names in the new video
// uses same Traingle function as above as well
// Triangle(5, 7); // RETURNS UNDEFINED!
// // USING THE NEW OPERATOR!
// const tri1 = new Triangle(3, 4);
// tri1.getHypotenuse(); // 5
// const tri2 = new Triangle(9,12);
// tri2.getHypotenuse(); // 15


// skipped for now





// starting video 8
// classes intro

// dont need function parans () as it is an object
// class Triangle{
//     constructor(a, b, c){
//         // console.log('you made a new triangle')
//         // console.log(a, b, c);
//         // validating below
//         for(let side of [a,b,c]){
//             if (!Number.isFinite(side) || side <= 0) {
//                 throw new Error("Invalid side: " + side);
//             }
//         }
//         // can do all of below with a loop instead of writing each one out
//         // if (!Number.isFinite(a) || a <= 0) {
//         //     throw new Error("Invalid a: " + a);
//         // }
//         // if (!Number.isFinite(b) || b <= 0) {
//         //     throw new Error("Invalid b: " + b);
//         // }
//         // if (!Number.isFinite(c) || c <= 0) {
//         //     throw new Error("Invalid c: " + c);
//         // }
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     greet(){
//         console.log("HELLO FROM TRIANGLE");
//     }
//     display(){
//         console.log(`Triangle with the sides of ${this.a}, ${this.b}, and ${this.c}`);
//     }
// }
// method greet is included in the below triangles as it was added to it above
// when calling we are creating a new object based off the above template
// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;

// firstTri.display() // in console
// secondTri.display()

// we dont need to manually add a and b every time like above, we can pass them in
// in next videi





// start video 9
// adding constructors
// passing in data when we call - new Triangle
// do this using constructors, using a special method we add to the class
// that is automatically called, has to be named constructor
// added to the class created above as Triangle

// const t1 = new Triangle(3, 4, 5)
// const t2 = new Triangle(9, 20, 50)

// we can assign properties like we just did and
// we can validate data like shown below, added to above class

// constructor(a,b) {
//     if (!Number.isFinite(a) || a <= 0) {
//         throw new Error("Invalid a: " + a);
//      }
//     if (!Number.isFinite(b) || b <= 0) {
//         throw new Error("Invalid b: " + b);
//      }
//     this.a = a;
//     this.b = b;
// }

// shorter version using a loop
// for(let side of [a,b,c]){
//     if (!Number.isFinite(side) || side <= 0) {
//         throw new Error("Invalid side: " + side);
//     }
// }

// const myTri = new Triangle(-3, 4, 5)





// start video 10
// adding methods
// above code coppied below for readability

class Triangle{
    constructor(a, b, c){
        console.log("INSIDE TRIANGLE CONSTRUCTOR")
        for(let side of [a,b,c]){
            if (!Number.isFinite(side) || side <= 0) {
                throw new Error("Invalid side: " + side);
            }
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet(){
        console.log("HELLO FROM TRIANGLE");
    }
    display(){
        return `Triangle with the sides of ${this.a}, ${this.b}, and ${this.c}`;
    }
    getArea(){
        // destructured instead of typing each a,b,c one out
        const {a,b,c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c))
    }
    isBig(){
        // must add 'this' keyword to acces the method in this instance
        // returns a true or false
        return this.getArea() > 50;
    }
}

// const t1 = new Triangle(3, 4, 5)
// const t2 = new Triangle(5, 9, 10)
// const t3 = new Triangle(30, 40, 50)
// t3.getArea()  // 600
// t3.isBig()  // true
// const myTri = new Triangle(-3, 4, 5) commented out due to error





// starting video 11
// extends / inheritance & super

class RightTriangle extends Triangle{
    constructor(a, b, c){
        // can get rid of duplicate methods and code to keep things concise with extends
        // this runs first when righttriangle is called and then super calls the rest of the constructor from triangle
        if(a * a + b * b !== c * c){
            throw new Error('Invalid C side for right triangle')
        }
        console.log("INSIDE RIGHT TRIANGLE CONSTRUCTOR")
        super(a,b,c);
        // must pass in a,b,c or error, notice the order of the console logs of inside
        // calls the constructor of the super class (whatever we are extending)
        this.hypot = c;
        // add in another property for righttriangle so we know which side is the hypot
        // must call super constructor in derived class before before accesing 'this'
    }
    // can also add new methods that dont exist on triangle class
    isRightTriangle(){
        return true
    }
    // can also override existing methods on triangle
    display(){
        return 'Right ' + super.display();
        // instead of typing the whole line out we can use super again to add
        // what we want to the existing display() in triangle
    }
}

const myRightTriangle = new RightTriangle(3,4,5)
// new RightTriangle(3,4,6) // catches the error