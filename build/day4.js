"use strict";
// Program 1
class PersonV {
    constructor(msg) {
        this.greeting = msg;
    }
    greet() {
        return this.greeting;
    }
}
let pro = new PersonV("Hello");
console.log(pro.greeting);
console.log(pro.greet());
// Program 2
// Private and public
class PersonN {
    constructor(name) {
        this.name = name;
    }
    getName() {
        this.getgreet();
        return this.name;
    }
    getgreet() {
        console.log('Hello');
    }
}
let hanif = new PersonN('Hanif');
console.log(hanif.getName());
// Program 3
class PersonNN {
    // private name : string;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let mayuri = new PersonNN('Mayuri');
console.log(mayuri.getName());
// Program 4
class PersonNNN {
    constructor(name) {
        this.name = name;
    }
    // public setName(newname:string):string{
    //     this.name = newname
    //     return this.name
    // }
    getName() {
        return this.name;
    }
}
let ankit = new PersonNNN("Ankit");
console.log(ankit.getName());
