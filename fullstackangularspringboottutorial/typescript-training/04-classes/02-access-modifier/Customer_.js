var Customer_Access_Specifiers = /** @class */ (function () {
    function Customer_Access_Specifiers(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer_Access_Specifiers.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer_Access_Specifiers.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer_Access_Specifiers;
}());
var myCustomer_Access = new Customer_Access_Specifiers("praveen", "km");
console.log(myCustomer_Access.firstName);
console.log(myCustomer_Access.lastName);
//Compile
//tsc --target ES5 --noEmitOnError Customer_.ts
