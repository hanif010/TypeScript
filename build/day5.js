"use strict";
// Program 1
class Person {
    constructor(nm) {
        this.name = nm;
    }
}
let hanif1 = new Person('Hanif');
// Program 2
class PersonC {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        console.log(this.name);
    }
}
let ninad = new PersonC("Ninad Dani");
console.log(ninad.name);
ninad.displayName();
console.log(ninad);
// Program 3
class PersonD {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        console.log(this.name);
        this.displayGreet();
    }
    displayGreet() {
        console.log("Hello I am new to City");
    }
}
let mohit = new PersonD("mohit Chavan");
mohit.displayName();
// Program 4
class PersonE {
    constructor(age) {
        this.age = age;
    }
}
let ram = new PersonE(12);
console.log(ram);
// Program 5
class PersonF {
    constructor(nm) {
        this.name = nm;
    }
    getName() {
        return this.name;
    }
}
let ankita = new PersonF('Ankit');
console.log(ankita.name);
class SBI {
    loan() {
        return 9;
    }
    save() {
        return 10;
    }
    cityName() {
        return "Pune";
    }
}
class PNB {
    loan() {
        return 11;
    }
    save() {
        return 12;
    }
    cityName() {
        return "Jaipur";
    }
}
let SBIPUNE = new SBI();
console.log(SBIPUNE.loan());
console.log(SBIPUNE.save());
console.log(SBIPUNE.cityName());
let PNBPUNE = new PNB();
console.log(PNBPUNE.loan());
console.log(PNBPUNE.save());
console.log(PNBPUNE.cityName());
