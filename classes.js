// Constructor Function

/*function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
        console.log('Draw');
    }
}*/

// ES6 CLASSES

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log('Draw');
    }
}

const c = new Circle(10);

