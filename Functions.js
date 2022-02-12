// function gets hoisted to the top expect function expression

// function declaration 
function greet() {
    console.log("Hello There");
}

// function expression  - function stored in a variable
const speak = function () {
    console.log("Hello Expression")
};


greet();

speak();


// function with parameters 
const speakk = function (name) {
    console.log(`hello ${name}`);
};


speakk('abc');


const speakk = function (name = 'xyz') {
    console.log(`hello ${name}`);
};
speakk(); ///prints xyz
speakk('abc') //prints abc


// regular functions 
const calcArea = function (radius) {
    let area = 3.14 * radius ** 2;
    return area;
}

const area = calcArea(5);
console.log(area);


// arrow function 
const calcArea2 = (radius) => {
    return 3.14 * radius ** 2;
};

console.log(calcArea2(5));

// when we have only one parameter, and only one return statement, the arrow function can be simlified to 
const calcarea2 = radius => 3.14 * radius ** 2;


// arrow function from regular function 
const bill = function (products, tax) {
    let total = 0;
    for (let i = 0; products.lenghth; i++) {
        total += product[i] + product[i] * tax;
    }
    return total;
}

console.log(bill([11, 12, 13], 0.5));

const bill = (product, tax) => {
    let total = 0;
    for (let i = 0; product.lenghth; i++) {
        total += product[i] + product[i] * tax;
    }
    return total;

};



// functions
const greet = () => 'hello';
console.log(greet());

// methods - that is accessed using dot notation
const name = 'abc';
console.log(name.toUpperCase());


// callbacks & foreach 
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

// myFunc(function (value) {
//     console.log(value);
// });

myFunc(value => {
    console.log(value);
})


// foreacch 
let people = ['mario', 'lugi', 'ryu', 'shaun', 'chun-li'];

// regular function
people.forEach(function (person) {
    console.log(person);
});

// arrow function 
people.forEach((person, index) => {
    console.log(index, person);
});

// you can create a callback function seperately and then pass it in the above 
const logPerson = (person, index) => {
    console.log(`${index}-hello ${person}`);
};

people.forEach(logPerson);


// get a reference  to the 'ul' --> ul is defined in index.html with class name people
let people = ['mario', 'lugi', 'ryu', 'shaun', 'chun-li'];

const ul = document.querySelector('.people');

people.forEach(function (person) {
    html += <li style="color: purple"> ${person}</li>;
});

people.forEach(person => {
    html += <li style="color: purple"> ${person}</li>;
});

console.log(html);
ul.innerHTML = html;