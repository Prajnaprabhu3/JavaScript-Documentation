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


// Template String
const title = "Hello, how are you doing?";
const author = "ABCD";
const likes = 1000;


// Concatenation way
let result1 = 'The blog called ' + title + " by" + author + " has" + likes + " likes";

// template string way/ template literal
let result2 = `The blog called ${title} by ${author}+ has ${likes}+ likes`;


// Creating html templates 
let html = `
<h2> ${title} </h2>
<p> By ${author} </p>
<span> This blog has ${likes} likes </span>
`;

console.log(html);




// Arrays - used to collection of dataTypes
let array = ['abc', 'def', 'ghi'];

// To access different elements of an array 
a[0];
a[1];
a[2];

// Array dataType is mutable - can be reassigned
a[0] = "xyz";

// Array can store different dataTypes 
let random = ['abc', 'cde', 30, 50];



// Array Methods
// 1. join() - joins the array elements through the symbol within brackets
array.join('-');

// 2.indexOf()- to find the index position of ab array element
array.indexOf("ghi");

// 3. conca() - joins the array with elements within the brackets 
array.concat('ken', 'hdf');

// 4. push(ele) - adds an element to the end of the array
array.push('ken');

// 5. pop() - removes elements from the end of the array 
array.pop();

// 6.shift() - removes an element from the start of the array 
array.shift();

// 7. unshift(ele) - adds an element to the start of the array 
array.unshift('art');



// ************************************



// Null and Undefined 
let age;
console.log(age, age + 3, `the age is ${age}`);
// ouput would be - undefined, NaN, the age is undefined
let age1 = null;  //null is explicitly given


// **********************




// Booleans 
let email1 = 'abcd@gmail.com';

email.includes('!'); //gives false
email.includes('@'); //gives true

let age2 = 25;

console.log(age == 25); //outputs true
console.log(age == 30); //outputs false
console.log(age < 30); //outputs true
console.log(age > 30); //outputs false


let name = 'adf';

console.log(name == 'adf'); //gives true
console.log(name == 'Adf'); //gives false
console.log(name > 'cdf'); //gives false
console.log(name < 'cdf'); //gives true


// loose comaprison (different datatypes can still be equal)
letage3 = 25;

age == 25;  //true
age == '25'; //true


// strict comparison (different datatypes cannot be equal)
age === 25; //true
age === '25'; //false


// type conversion 
// Too convert a String to Number
let score = '100';
score = Number(score); //converts to 100
score += 1;
console.log(typeof score);

let g = "hello";
g = Number(g); //gives NaN as it doesnt make sense


// To convert a Number to String 
let num = 60;
num = String(num);
console.log(typeof num);


// To convert to Boolean 
console.log(Boolean(100)); //gives true
console.log(Boolean(0)); //gives false
console.log(Boolean('0')); //gives true

// In javascript all positive values are considered to be true and 0, undefined etc to be false


// **********************



// Loops and Conditionals - Control Flow
// for loops 
for (let i = 0; i < 5; i++) {
    console.log('in loop: ', i);
}

const name = ['abc', 'cde', 'erd'];
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}


// while loop 
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


while (i < name.lenght) {
    console.log(name[i]);
    i++;
}



// do-while loop 
do {
    console.log('val of i: ', i);
} while (i < 5);



// if statments 
const age4 = 34
if (age > 20) {
    console.log("you are over 20 years old");
}

const arr = ['arc', 'tyf', 'sds'];
if (arr.lenght > 3) {
    console.log('thats a lot of array elements');
}


// example:
const password = "@password";

if (password.length >= 12 && password.includes('@')) {
    console.log("the password is might strong");
}
else if (password.length >= 8) {
    console.log('The password is ling enough!');
}
else {
    console.log("The password is not long enough");
}










