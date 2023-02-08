"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
        this.width = width;
    }
    getExtendedValues() {
        console.log(this.height);
    }
}
class PersonM {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName() {
        return this.firstName + this.lastName;
    }
}
class PersonCa extends PersonM {
    displayName() {
        return "hello";
    }
}
let ca = new PersonCa("mayuri", "katwe");
ca.displayName();
class Human {
    displayCountryName() {
        return "India";
    }
}
class PersonL extends Human {
    displayName() {
        return "chinmay deshpande";
    }
    displayCity() {
        return "pune";
    }
}
let maol = new PersonL();
maol.displayCity();
maol.displayCountryName();
maol.displayName();
