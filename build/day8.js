"use strict";
// class 1
class VehicleA {
    constructor() {
        this.color = "blue";
        this.model = 134;
    }
    display() {
        console.log(this.color);
    }
}
let audi = new VehicleA();
audi.color;
audi.model;
audi.display();
// program 2
class VehicleB {
    constructor(model, type, color) {
        this.model = model;
        this.type = type;
        this.color = color;
    }
    display() {
        console.log(this.color);
    }
}
let audi1 = new VehicleB(123, "SUV", "red");
audi1.model;
audi1.type;
audi1.color;
audi1.display();
// Program3
class VehicleC {
    constructor(model, type, color) {
        this.model = model;
        this.type = type;
        this.color = color;
    }
    display() {
        console.log(this.color);
    }
}
let bmw = new VehicleC(133, "SUV", "red");
console.log(bmw.color);
// program 4 
class VehicleD {
    static displayCountry() {
        console.log(VehicleD.country);
    }
    display() {
        console.log("hello .....");
    }
}
VehicleD.country = "India";
VehicleD.displayCountry();
console.log(VehicleD.country);
let q = new VehicleD();
q.display();
// Private
class StudentA {
    constructor(fn, ag, sks) {
        this.fullName = fn;
        this.age = ag;
        this.skills = sks;
    }
    getFullName() {
        return this.fullName;
    }
    getAge() {
        return this.age;
    }
    getSks() {
        return this.skills;
    }
}
let a1 = new StudentA("ads", 34, ["js"]);
a1.getFullName();
// program 6
class Student {
    constructor(fn, ag, sks) {
        this.fullName = fn;
        this.age = ag;
        this.skills = sks;
    }
}
let kl = new Student("as", 45, ["python"]);
console.log(kl.age);
