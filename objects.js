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

circle.draw();

