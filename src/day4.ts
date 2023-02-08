// Program 1

class PersonV {
    greeting: string;
    constructor(msg: string) {
        this.greeting = msg
    }
    greet(): string {
        return this.greeting
    }
}
let pro = new PersonV("Hello")
console.log(pro.greeting)
console.log(pro.greet())

// Program 2
// Private and public

class PersonN{
    private name :string;
    public constructor(name:string){
        this.name = name
    }
    public getName():string{
        this.getgreet()
        return this.name
    }
    private getgreet(){
        console.log('Hello')
    }
}
let hanif = new PersonN('Hanif')
console.log(hanif.getName())

// Program 3

class PersonNN{
    // private name : string;
    public constructor (private name: string){}
    public getName ():string{
        return this.name
    }
}
let mayuri = new PersonNN('Mayuri')
console.log(mayuri.getName())

// Program 4
class PersonNNN{
    private readonly name : string;
    public constructor(name:string){
        this.name = name
    }
    // public setName(newname:string):string{
    //     this.name = newname
    //     return this.name
    // }
    public getName():string {
        return this.name
    }
}
let ankit = new PersonNNN("Ankit")
console.log(ankit.getName())


