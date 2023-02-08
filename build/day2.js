"use strict";
// Program 1
function additionA(x, y) {
    return x + y;
}
let q1 = additionA(12, 3);
console.log(q1);
// Program 2
let x2;
x2 = 10;
console.log(x2);
// Program 3
let firstname;
firstname = "Hanif";
console.log(firstname);
// Program 4
let canDrive;
let age = 18;
if (age >= 18) {
    canDrive = true;
}
else {
    canDrive = false;
}
// Program 5
let studentA = {
    firstname: "Hanif",
    lastname: "Jamadar"
};
let studentB;
studentB = {
    firstname: "Hanif",
    lastname: "Jamadar",
    age: 24
};
console.log(studentB);
// Program 6 (Array)
let city = [];
city.push('Pune');
city.push('Nashik');
city.push('Sangamner');
console.log(city);
city.forEach(function (el) {
    console.log(el.toUpperCase());
});
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(function (el) {
    console.log(el);
});
// Program 7 (Array of fixed length tuple)
let info;
info = ["Chinmay", "Deshpande", 25];
console.log(info);
// Program 8 enum
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["supervision"] = 1] = "supervision";
    Roles[Roles["sr_supervision"] = 2] = "sr_supervision";
    Roles[Roles["customer"] = 3] = "customer";
    Roles[Roles["client"] = 4] = "client";
    Roles[Roles["manager"] = 5] = "manager";
    Roles[Roles["sr_manager"] = 6] = "sr_manager";
})(Roles || (Roles = {}));
if (Roles.sr_manager) {
    console.log('Senior Manager');
}
