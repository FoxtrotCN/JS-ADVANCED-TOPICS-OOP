// JavaScript is all about objects!

// Objects literals is the simplest way to create an object in js

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

// The members in an object receive the name of properties (Key:Value pairs)
// Functions receive the name of Methods (Perform some task)

// We can access the properties and methods in object with dot notation

// circle.draw();

// If an object has more than 1 method we say that object has behavior
// Let's suppose we want to create another circle object,
// Doing in the was above could bring us some problems, so,
// We can do this:

// A factory function

function createCircle(radius) {
    // Create a circle object

    return {
        radius,
        draw: function () {
            console.log('Draw');
        }
    };
}

const circle1 = createCircle(2)
console.log(circle1);
circle1.draw();


