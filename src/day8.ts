// class 1

class VehicleA {
    color:string = "blue"
    model:number = 134

    display(){
        console.log(this.color)
    }
}

let audi = new VehicleA()
audi.color
audi.model
audi.display()


// program 2

class VehicleB {

    model:number;
    type:string;
    color:string;
    constructor(model:number,type:string,color:string){
        this.model = model
        this.type = type
        this.color = color
    }

        display(){
        console.log(this.color)
    }
}

let audi1 = new VehicleB(123,"SUV","red")
audi1.model
audi1.type
audi1.color
audi1.display()

// Program3
class VehicleC {
    constructor(public model:number,public type:string,public color:string){
    }

    display(){
        console.log(this.color)
    }
}

let bmw = new VehicleC(133,"SUV","red")
console.log(bmw.color)

// program 4 

class  VehicleD {
    static country:string ="India"
    static displayCountry():void{
        console.log(VehicleD.country)
    }
    display(){
        console.log("hello .....")
    }
}
VehicleD.displayCountry()
console.log(VehicleD.country)
let q = new VehicleD()
q.display()

// Private

class StudentA  {
    private fullName:string
    private age:number
    private skills:string[]

    constructor(fn:string, ag:number , sks:string []){
        this.fullName = fn
        this.age = ag
        this.skills = sks
    }

    getFullName(){
        return this.fullName
    }

    getAge(){
        return this.age
    }
    getSks(){
        return this.skills
   }

}

let a1 = new StudentA("ads",34 , ["js"])
a1.getFullName()

// program 6
class Student {

    readonly fullName: string
    readonly age: number
    readonly skills: string[]

    constructor(fn: string, ag: number, sks: string[]) {
        this.fullName = fn
        this.age = ag
        this.skills = sks
    }

    // setFullName(n:string){
    //     this.fullName = n
    // }

}
let kl = new Student("as",45,["python"])
console.log(kl.age)