var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.fistName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("praveen", "km");
// //let myCustomer=new Customer();
// myCustomer.fistName="praveen";
// myCustomer.lastName="km";
console.log(myCustomer.fistName);
console.log(myCustomer.lastName);
