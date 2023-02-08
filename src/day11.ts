interface Shape {
    getArea:()=>number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width:number, protected readonly height:number){}
    public getArea(){
        return this.width * this.height
    }
}

class Square extends Rectangle {
    public constructor(public width:number){
        super(width,width)
    }
    public getExtendedValues(){
        console.log(this.height)
    }
}


class PersonM {
    constructor(public firstName:string, public lastName:string){}
    public displayName():string {
        return this.firstName + this.lastName
    }
}

class PersonCa extends PersonM {
    public override displayName():string {
        return "hello"
    }
}

let ca = new PersonCa("mayuri","katwe")
ca.displayName()


abstract class Human {
    public abstract displayName():string;
    public displayCountryName():string {
        return "India"
    }
}

class PersonL extends Human {
    public  displayName():string {
        return "chinmay deshpande"
    }
    public  displayCity():string {
        return "pune"
    }
}

let maol = new PersonL()
maol.displayCity()
maol.displayCountryName()
maol.displayName()