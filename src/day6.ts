// Program 1
interface Worldabank{
    save():number
    loan():number
}

class SBIa implements Worldabank{
    loan(): number {
        return 10
    }
    save(): number {
        return 20
    }
    branchName():string{
        return "Kharadi Pune"
    }
}
let khardi = new SBIa();
khardi.loan()
khardi.save()
khardi.branchName()

// Program 2

interface Student{
    info():string
}

interface Teacher{
    salary():number
}

class Personx implements Student,Teacher{
    info(): string {
        return "Maths Science Physics"
    }
    salary():number{
        return 12000
    }
}

class Persony implements Teacher{
    salary():number{
        return 12000
    }
}

let zakir = new Personx()
zakir.info()
zakir.salary()

let emdo = new Persony()
emdo.salary()

// Program 3
// Extends

interface WorldbankB{
    getCode():number
}

class RBI implements WorldbankB{
    getCode(): number {
        return 1000
    }
}

class PNBa extends RBI {
    loan():number{
        return 10
    }
    save():number{
        return 20
    }
}

let nagpur = new PNBa()
nagpur.getCode()
nagpur.loan()
nagpur.save()

// Program 4

interface WorldbankC{
    getCode():number
}

class RBIa implements WorldbankC{
    getCode(): number {
        return 1000
    }
}

class PNB1 extends RBIa{
    loan():number{
        return 10
    }
    save():number{
        return 20
    }
    getCode(): number {
        super.getCode()
        return 2000
    }
}

let pune = new PNB1()
pune.getCode()
pune.save()
pune.loan()

// --------------------

abstract class RBIIndia{
    abstract loan():number
    abstract save():number

    country():string{
        return "India"
    }
}

class SBIab extends RBIIndia{
    loan(): number {
        return 10
    }
    save(): number {
        return 20
    }
}

let aa = new SBIab()
aa.loan()
aa.save()
aa.country()
