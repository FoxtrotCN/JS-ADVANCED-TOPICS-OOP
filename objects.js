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

// The way above is just one option.
// We got another one in JS

// A constructor function -> Use a naming convention different:
// The first letter should be UpperCase

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw');
    }
}

const anotherCircle = new Circle(2);
console.log(anotherCircle);
anotherCircle.draw();
console.log(anotherCircle.radius);


// Exercises

// 1 - StopWatch

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (startTime)
            throw new Error('The count already stared!');
        running = true;
        startTime = new Date();
    };

    this.stop = function () {
        if (!startTime)
            throw new Error('The count is not started!')
        running = false;
        endTime = new Date();

        const seconds = (((endTime.getTime() - startTime.getTime()) / 1000));
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = undefined;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {return duration}
    });
}