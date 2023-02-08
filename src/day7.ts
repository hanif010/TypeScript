// interface -- completion abtraction 

interface Worldbank {
    save(): number
    loan(): number
}

class SBIP implements Worldbank {
    save(): number {
        return 10
    }
    loan(): number {
        return 10
    }
    displayBranch(): string {
        return "pune"
    }
}

let amolR = new SBIP()
amolR.displayBranch()
amolR.save()
amolR.loan()

// program 2
interface Save {
    accountNumber(): number
    checkBank(): number
    checkSInterest(): number
}
interface Loan {
    checkLInterest(): number
}
interface Current {
    checkLimit(): number
}

class SBIM implements Save, Loan, Current {
    accountNumber(): number {
        return 55
    }
    checkBank(): number {
        return 40
    }
    checkSInterest(): number {
        return 20
    }
    checkLInterest(): number {
        return 10
    }
    checkLimit(): number {
        return 10
    }
}

let  ch = new SBIM()
ch.accountNumber()
ch.checkBank()
ch.checkLInterest()
ch.checkLimit()
ch.checkSInterest()

class PNBP implements Current ,Save {
    accountNumber(): number {
        return 55
    }
    checkBank(): number {
        return 40
    }
    checkSInterest(): number {
        return 20
    }
    checkLimit(): number {
        return 10
    }
}

let  chi = new PNBP()
chi.accountNumber()
chi.checkBank()
chi.checkLimit()
chi.checkSInterest()

// program 3
interface Citizen {
    adharCard:number
}

class GrandFather implements Citizen{
    firstName:string
    lastName:string
    adharCard:number
    constructor(fn:string , ln:string ,adharCard:number){
        this.firstName = fn
        this.lastName = ln
        this.adharCard = adharCard  
    }
}

class Father extends GrandFather {
    constructor(fn:string ,ln:string,adharCard:number){
        super(fn,ln,adharCard)
    }
}

let chinmaya = new Father("chinmay","deshpande",123)
console.log(chinmaya.adharCard)
console.log(chinmaya.firstName)
console.log(chinmaya.lastName)