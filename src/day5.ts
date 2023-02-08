// Program 1

class Person{
    name:string
    constructor(nm:string){
        this.name = nm
    }
}
let hanif1 = new Person('Hanif');

// Program 2
class PersonC{
    public name:string;
    constructor(nm:string){
        this.name = nm
    }
    public displayName(){
        console.log(this.name)
    }
}
let ninad = new PersonC("Ninad Dani")
console.log(ninad.name)
ninad.displayName()
console.log(ninad)

// Program 3
class PersonD{
    private name:string;
    constructor(nm:string){
        this.name = nm
    }
    public displayName(){
        console.log(this.name)
        this.displayGreet()
    }
    private displayGreet(){
        console.log("Hello I am new to City")
    }
}
let mohit = new PersonD("mohit Chavan")
mohit.displayName()

// Program 4
class PersonE{
    constructor(private age:number){
    }
}
let ram = new PersonE(12)
console.log(ram)

// Program 5
class PersonF{
    public readonly name:string;
    constructor(nm:string){
        this.name = nm
    }
    public getName(){
        return this.name
    }
}
let ankita = new PersonF('Ankit')
console.log(ankita.name)

// Program 6
interface Worldbank{
    loan():number
    save():number
}

class SBI implements Worldbank{
    public loan(): number {
        return 9
    }
    public save(): number {
        return 10
    }
    public cityName():string{
        return "Pune"
    }
}

class PNB implements Worldbank{
    public loan():number{
        return 11
    }
    public save(): number {
        return 12
    }
    public cityName():string{
        return "Jaipur"
    }
}

let SBIPUNE = new SBI()
console.log(SBIPUNE.loan())
console.log(SBIPUNE.save())
console.log(SBIPUNE.cityName())

let PNBPUNE = new PNB()
console.log(PNBPUNE.loan())
console.log(PNBPUNE.save())
console.log(PNBPUNE.cityName())

