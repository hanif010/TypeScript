interface Greetable {
    name:string
    greet(word:string):void
    display(year:string):void
}

interface year {
    year:string
    display(year:string):void
}


class PersonJ implements Greetable ,year {
    name: string
    year:string

    constructor(name:string,year:string){
        this.name = name
        this.year = year
    }

    greet(word: string): void {
        console.log(`welcome ${word}`)
    }

    display(year: string): void {
        console.log(`welcome ${year}`)
    }

}
let ameya = new PersonJ("amol","1990")

type Admin = {
    name:string
    roles:string[]
}
type Employe1 = {
    name:string
    startDate:Date
}

type CalEmployee = Admin & Employe1
type CalEmployee2 = Admin | Employe1

let h1:CalEmployee = {
    name:"vijeet",
    roles:["admin","customer","operator"],
    startDate:new Date()
}


// // program 3
type language = string | boolean
type language2 = boolean | number
type language3 = language  & language2
let b1:language3 = true

type ch = number|string
// program 4

function add(a:number,b:number):number
function add(a:string,b:string):string
function add(a:string,b:number):string
function add(a:number,b:string):string
function add (a:ch,b:ch){
    if(typeof a == "string" && typeof b == "string"){
        return a + b
    }
    else if(typeof a == 'number' && typeof b == 'number'){
        return a + b
    }
    else if(typeof a == 'number' && typeof b == 'string'){
        return a.toString() + b
    }
    else if(typeof a == 'string' && typeof b == 'number'){
        return a + b.toString()
    }
}
console.log(add(1,3))
console.log(add(1,'3'))
console.log(add('1','3'))
console.log(add('1',2))