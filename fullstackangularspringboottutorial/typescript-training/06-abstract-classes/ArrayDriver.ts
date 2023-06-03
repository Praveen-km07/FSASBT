import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle =new Circle(5,5,10);
let myRectangle = new Rectangle(2,2,2,2);

//declare an array of shapes ...intially empty
let theShapes:Shape [] =[];

//add the shapes to the array

theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempshape of theShapes){
    console.log(tempshape.getInfo());
    console.log(tempshape.calculateArea());
    console.log();
}

