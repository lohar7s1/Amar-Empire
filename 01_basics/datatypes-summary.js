// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const  outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

// const bigNumber = 125854644646878788454545n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "batman", "ironman"]
let myObj = {
    name: "anil",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}  

console.log(typeof anotherId);

//https://ecma-international.org/publications-and-standards/standards/ecma-262/