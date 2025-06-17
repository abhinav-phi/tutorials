//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Bigint likhne ka tarika, last me "n" lga dena

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "abhinav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack memory use hoti h (primitive), heap memory use hoti h(non-primitive) 

let myName = "abhinav"
let anothername = myName
anothername = "yadavji"

console.log(anothername);
console.log(myName);

let userone = {
    email : "abhinav@oksbi",
    upi : "abhinav@paytm"
}

let usertwo = userone

usertwo.email = "abhi@oksbi"

console.log(userone);
console.log(usertwo);

