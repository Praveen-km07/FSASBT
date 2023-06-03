"use strict";
class Customer_Parameter_Properties {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
let myCustomer_Parameter_Properties = new Customer_Parameter_Properties("praveen", "km");
console.log(myCustomer_Parameter_Properties.firstName);
console.log(myCustomer_Parameter_Properties.lastName);
//tsc --build --clean
