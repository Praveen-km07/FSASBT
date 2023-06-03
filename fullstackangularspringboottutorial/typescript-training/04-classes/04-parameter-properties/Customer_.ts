class Customer_Parameter_Properties{

    
    constructor(private _firstName:string,private _lastName:string){}

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

let myCustomer_Parameter_Properties= new Customer_Parameter_Properties("praveen","km");
console.log(myCustomer_Parameter_Properties.firstName);
console.log(myCustomer_Parameter_Properties.lastName);
//tsc --build --clean
