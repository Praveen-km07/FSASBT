"use strict";
class Customer_Access_Specifiers {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer_Access = new Customer_Access_Specifiers("praveen", "km");
console.log(myCustomer_Access.firstName);
console.log(myCustomer_Access.lastName);
//Compile
//tsc --target ES5 --noEmitOnError Customer_.ts
//tsc --init
