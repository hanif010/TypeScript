type person = {
    firstname:string,
    lastname:string
}

let chinmay:person ={
    firstname:"Chinmay",
    lastname: "Deshpande"
}

let amol:{firstname:string,lastname:string}={
    firstname:"Amol",
    lastname:"Rao"
}

let sarika:person={
    firstname:"Sarika",
    lastname:"pansare"
}

type Car ={
    modelNumber:number,
    color:string,
    type:string
}

let Audi:Car = {
    modelNumber:123,
    color :"Black",
    type:"qwerty" 
}

interface PersonB  {
    firstname:string,
    lastname:string
}

let s:PersonB = {
    firstname : "Mayuri",
    lastname : "Katwe"
}

// Unions
 
function printAdress(code:string|number){
    console.log(`Mu address is${code}`)
    console.log(code)
}
printAdress(12)
printAdress('12')

let account:"saving"|"current"
account = "current"

// Functions

function getname():void{
    console.log("Chinmay Deshpande")
}
getname()

function givestring(){
    return "Hello"
}
givestring()

function candriveA():boolean{
    return true
}
candriveA()