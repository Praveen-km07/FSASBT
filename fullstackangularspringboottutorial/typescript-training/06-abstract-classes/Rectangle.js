"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    calculateArea() {
        return this._width * this._legnth;
    }
    constructor(theX, theY, _width, _legnth) {
        super(theX, theY);
        this._width = _width;
        this._legnth = _legnth;
    }
    get legnth() {
        return this._legnth;
    }
    set legnth(value) {
        this._legnth = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    getInfo() {
        return super.getInfo() + `,width=${this._width},length=${this._legnth}`;
    }
}
exports.Rectangle = Rectangle;
