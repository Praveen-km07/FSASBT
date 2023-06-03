class Customer{

    fistName:string;
    lastName:string;

    constructor(theFirst:string,theLast:string){
        this.fistName=theFirst;
        this.lastName=theLast;
    }

}

let myCustomer = new Customer("praveen","km");

// //let myCustomer=new Customer();
// myCustomer.fistName="praveen";
// myCustomer.lastName="km";

console.log(myCustomer.fistName);
console.log(myCustomer.lastName);