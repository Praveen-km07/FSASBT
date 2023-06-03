class Customer_Access_Specifiers{

    private _firstName: string;
    private _lastName: string;

    

    constructor(theFirst:string,theLast:string){
        this._firstName=theFirst;
        this._lastName=theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }


}

let myCustomer_Access= new Customer_Access_Specifiers("praveen","km");


console.log(myCustomer_Access.firstName);
console.log(myCustomer_Access.lastName);

//Compile
//tsc --target ES5 --noEmitOnError Customer_.ts