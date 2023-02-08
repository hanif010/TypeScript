"use strict";
class PersonJ {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    greet(word) {
        console.log(`welcome ${word}`);
    }
    display(year) {
        console.log(`welcome ${year}`);
    }
}
let ameya = new PersonJ("amol", "1990");
let h1 = {
    name: "vijeet",
    roles: ["admin", "customer", "operator"],
    startDate: new Date()
};
let b1 = true;
function add(a, b) {
    if (typeof a == "string" && typeof b == "string") {
        return a + b;
    }
    else if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a == 'number' && typeof b == 'string') {
        return a.toString() + b;
    }
    else if (typeof a == 'string' && typeof b == 'number') {
        return a + b.toString();
    }
}
console.log(add(1, 3));
console.log(add(1, '3'));
console.log(add('1', '3'));
console.log(add('1', 2));
