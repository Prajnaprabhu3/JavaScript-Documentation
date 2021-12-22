// keywords - let, var, const
// let- supports re-assignment 
let age = 25;
let year = 2021;

console.log(age, year);


// Constvariables cannot be re-assigned or over-written
const pi = 3.14;
console.log(pi);

//var- older keyword, that was there brfore let an dconst
var score = 75;
comsole.log(score);


// JavaScript Data Types
/*
Number    1,2,3,4,
String    "hello world"
Boolean    true/false
Nyll       Explicitly set a variable with no value
Undefined  For variables that have not yet been defined
Object     Complex data structure- Arrays, Dates, Literals etc
Symbol     used with objects
*/


// Strings
let string = "Name";
console.log(string);
let email = '123aaa@gmail.com';



// String Concatenation
let firstName = "ABC";
let lastName = "DEF";

let fullName = firstName + ' ' + lastName;



// getting characters
firstName[0]; // returns A
firstName[2]; // returns C



// string length
firstName.length //gives 3


// string methods
// 1. To convert characters to uppercase 
fullName.toUpperCase();

// 2. To convert the characters to lower case 
fullName.toLowerCase();

// 3. Method to index/position of a character or word 
email.indexOf('@');


// 4. To find the last index of appearance of a character 
email.lastIndexOf('a');

// 5. slicing 
// first argument is where we want to slice from and second argument is slice till where 
// name.slice(start,end)
email.slice(0, 5);

// 6. substring method 
// first argument is where to start from and second argument is the no of charcaters you want s
email.substring(4, 10);

// 7. replace()
// first argument - the character that needs to be replaced , second argument - the character that replaces it 
// in case of multiple occurance of a character, only the first appearance is replaced 
email.replace('a', 'b');



// Numbers DataType 
let radius = 10;
// const pi = 3.14;

// Math operators +, -, *, /, **, %
let quotient = 10 / 2;
let multiply = 3 * 4;
let power = 2 ** 3;


// order of operation  B I D M A S
let result = 5 * (10 - 3) ** 2;

// increment and decrement operator 
let likes = 10;
likes++; //increments by one
likes--; // decrements by one

// NaN -not a numbet
// when something doesnt make sense
5 / 'hello'; //get NaN


// Concatenate Numbers 
let resultt = "The blog has " + likes + " likes";
console.log(resultt);









