"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_Parameter_Properties = void 0;
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
exports.Customer_Parameter_Properties = Customer_Parameter_Properties;
