"use strict";
// interface -- completion abtraction 
class SBIP {
    save() {
        return 10;
    }
    loan() {
        return 10;
    }
    displayBranch() {
        return "pune";
    }
}
let amolR = new SBIP();
amolR.displayBranch();
amolR.save();
amolR.loan();
class SBIM {
    accountNumber() {
        return 55;
    }
    checkBank() {
        return 40;
    }
    checkSInterest() {
        return 20;
    }
    checkLInterest() {
        return 10;
    }
    checkLimit() {
        return 10;
    }
}
let ch = new SBIM();
ch.accountNumber();
ch.checkBank();
ch.checkLInterest();
ch.checkLimit();
ch.checkSInterest();
class PNBP {
    accountNumber() {
        return 55;
    }
    checkBank() {
        return 40;
    }
    checkSInterest() {
        return 20;
    }
    checkLimit() {
        return 10;
    }
}
let chi = new PNBP();
chi.accountNumber();
chi.checkBank();
chi.checkLimit();
chi.checkSInterest();
class GrandFather {
    constructor(fn, ln, adharCard) {
        this.firstName = fn;
        this.lastName = ln;
        this.adharCard = adharCard;
    }
}
class Father extends GrandFather {
    constructor(fn, ln, adharCard) {
        super(fn, ln, adharCard);
    }
}
let chinmaya = new Father("chinmay", "deshpande", 123);
console.log(chinmaya.adharCard);
console.log(chinmaya.firstName);
console.log(chinmaya.lastName);
