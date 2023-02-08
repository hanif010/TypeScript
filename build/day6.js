"use strict";
class SBIa {
    loan() {
        return 10;
    }
    save() {
        return 20;
    }
    branchName() {
        return "Kharadi Pune";
    }
}
let khardi = new SBIa();
khardi.loan();
khardi.save();
khardi.branchName();
class Personx {
    info() {
        return "Maths Science Physics";
    }
    salary() {
        return 12000;
    }
}
class Persony {
    salary() {
        return 12000;
    }
}
let zakir = new Personx();
zakir.info();
zakir.salary();
let emdo = new Persony();
emdo.salary();
class RBI {
    getCode() {
        return 1000;
    }
}
class PNBa extends RBI {
    loan() {
        return 10;
    }
    save() {
        return 20;
    }
}
let nagpur = new PNBa();
nagpur.getCode();
nagpur.loan();
nagpur.save();
class RBIa {
    getCode() {
        return 1000;
    }
}
class PNB1 extends RBIa {
    loan() {
        return 10;
    }
    save() {
        return 20;
    }
    getCode() {
        super.getCode();
        return 2000;
    }
}
let pune = new PNB1();
pune.getCode();
pune.save();
pune.loan();
// --------------------
class RBIIndia {
    country() {
        return "India";
    }
}
class SBIab extends RBIIndia {
    loan() {
        return 10;
    }
    save() {
        return 20;
    }
}
let aa = new SBIab();
aa.loan();
aa.save();
aa.country();
