function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function extend(Child, Parent) {
    Child.prototype= Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
    console.log('draw');
}
Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
}



function Square(area) {
    this.area = area;
}

extend(Square, Shape);

Square.prototype.duplicate = function () {
    console.log('duplicate square');
}

const s = new Shape();
const c = new Circle(1, 'red');


const shapes = [
    new Circle(1, 'blue'),
    new Square(10)
]

for (let shape of shapes)
    shape.duplicate();



