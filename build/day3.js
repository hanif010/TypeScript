"use strict";
let chinmay = {
    firstname: "Chinmay",
    lastname: "Deshpande"
};
let amol = {
    firstname: "Amol",
    lastname: "Rao"
};
let sarika = {
    firstname: "Sarika",
    lastname: "pansare"
};
let Audi = {
    modelNumber: 123,
    color: "Black",
    type: "qwerty"
};
let s = {
    firstname: "Mayuri",
    lastname: "Katwe"
};
// Unions
function printAdress(code) {
    console.log(`Mu address is${code}`);
    console.log(code);
}
printAdress(12);
printAdress('12');
let account;
account = "current";
// Functions
function getname() {
    console.log("Chinmay Deshpande");
}
getname();
function givestring() {
    return "Hello";
}
givestring();
function candriveA() {
    return true;
}
candriveA();
