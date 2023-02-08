"use strict";
// program 1
class GrandFathera {
    constructor() {
        this.firstName = "manohar";
        this.lastName = "deshpande";
    }
    displayName() {
        console.log(this.firstName + this.lastName);
    }
}
class FatherA extends GrandFathera {
    constructor() {
        super(...arguments);
        this.fFirstName = "shirish";
    }
    displayFatherName() {
        console.log(this.fFirstName + this.lastName);
    }
}
class SonSS extends FatherA {
    constructor() {
        super(...arguments);
        this.sSName = "chinmay";
    }
    displaySonName() {
        console.log(this.sSName + this.lastName);
    }
}
let chinmayaa = new SonSS();
//properties 
chinmayaa.fFirstName;
chinmayaa.lastName;
chinmayaa.firstName;
chinmayaa.sSName;
// methods
chinmayaa.displayName();
chinmayaa.displaySonName();
chinmayaa.displayFatherName();
// program 
class GrandFatherA {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName() {
        console.log(this.firstName + this.lastName);
    }
}
class FatherAB extends GrandFatherA {
    constructor(firstName, lastName, fFirstName) {
        super(firstName, lastName);
        this.fFirstName = fFirstName;
    }
    displayNameFather() {
        console.log(this.fFirstName + this.lastName);
        super.displayName();
    }
}
class SonAB extends FatherAB {
    constructor(firstName, lastName, fFirstName, sFirstName) {
        super(firstName, lastName, fFirstName);
        this.sFirstName = sFirstName;
    }
    displayNameSon() {
        console.log(this.sFirstName + this.lastName);
        super.displayNameFather();
    }
}
let rama = new SonAB("manohar", "deshpande", "shirish", "chinmay");
rama.displayNameSon();
class FatherV {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFatherName() {
        console.log(this.firstName + this.lastName);
    }
}
class SonV extends FatherV {
    constructor(firstName, lastName, sfirstName) {
        super(firstName, lastName);
        this.sfirstName = sfirstName;
    }
    displaySonName() {
        console.log(this.sfirstName + this.lastName);
    }
}
class DaughterV extends FatherV {
    constructor(firstName, lastName, dfirstName) {
        super(firstName, lastName);
        this.dfirstName = dfirstName;
    }
    displaySonName() {
        console.log(this.dfirstName + this.lastName);
    }
}
let chinmayA = new SonV("shirish", "deshpande", "chinmay");
let gauri = new DaughterV("shirish", "deshpande", "gauri");
