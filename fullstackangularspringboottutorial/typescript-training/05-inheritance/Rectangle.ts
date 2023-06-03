import { Shape } from "./Shape";

export class Rectangle extends Shape
{
    
    constructor(theX:number,theY:number,private _width: number,private _legnth: number)
    {
          super(theX,theY);
    }
    public get legnth(): number {
        return this._legnth;
    }
    public set legnth(value: number) {
        this._legnth = value;
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    getInfo(): string {
        return super.getInfo() + `,width=${this._width},length=${this._legnth}`;
    }
    
}