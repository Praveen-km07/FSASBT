"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(5, 5, 10);
let myRectangle = new Rectangle_1.Rectangle(2, 2, 2, 2);
//declare an array of shapes ...intially empty
let theShapes = [];
//add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempshape of theShapes) {
    console.log(tempshape.getInfo());
}
