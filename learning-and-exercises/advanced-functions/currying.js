// CURRYING - A save point in a video game

// EXAMPLE 1
// Not curried
let add = (a, b) => (a + b);
// Curried
let addCurried = a => b => (a + b);

let sum1 = add(1, 2); // 3
let sum2 = addCurried(1)(2); // 3


// EXAMPLE 2
// Not curried
let rectangleArea = (width, height) => (width * height);
// Curried
function rectangeArea(width) {
    return function (height) {
        return width * height;
    }
}
let simplifiedRectangleArea = width => height => ( width * height );

rectangeArea(10)(5); // 50
const rectangleArea10 = rectangeArea(10); // function (height) { return width * height; }
const area = rectangleArea10(5) // 50
const area2 = simplifiedRectangleArea(10)(5); // 50

// REAL WORLD EXAMPLE

const withTitle = (Component, title) => {
    return props => <Component {...props} title={title} />;
}

const withHelloTitle = withTitle('hello');
const withByeTitle = withTitle('goodbye');