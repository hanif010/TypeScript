// Program 1
function additionA(x:number,y:number){
    return x+ y
}
let q1 = additionA(12,3)
console.log(q1)

// Program 2
let x2:number
x2 = 10
console.log(x2)

// Program 3
let firstname:string
firstname = "Hanif"
console.log(firstname)

// Program 4

let canDrive:boolean
let age = 18;
if(age>=18){
    canDrive = true
}
else{
    canDrive= false
}

// Program 5
let studentA = {
    firstname: "Hanif",
    lastname: "Jamadar"
}

let studentB:{firstname:string,lastname:string,age:number};
studentB = {
    firstname:"Hanif",
    lastname:"Jamadar",
    age:24
}
console.log(studentB)

// Program 6 (Array)

let city:string[] = [];
city.push('Pune')
city.push('Nashik')
city.push('Sangamner')
console.log(city)

city.forEach(function(el){
    console.log(el.toUpperCase())
})

let numbers:number[]=[1,2,3,4,5,6]
numbers.forEach(function(el){
    console.log(el)
})

// Program 7 (Array of fixed length tuple)

let info:[string,string,number]
info = ["Chinmay","Deshpande",25]
console.log(info)

// Program 8 enum

enum Roles {
    admin,
    supervision,
    sr_supervision,
    customer,
    client,
    manager,
    sr_manager,
}
if(Roles.sr_manager){
    console.log('Senior Manager')
}



















