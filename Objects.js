// object literal 
let user = {
    user: 'abc',
    age: 30,
    email: 'abc@gmail.com',
    location: 'Delhi',
    blogs: ['Hello, how are you doing', 'hello, how are you?']
};

console.log(user);
console.log(user.name); // One way to access the object keys. Dot notation
user.age = 40; //updating the age property
console.log(user.age);

console.log(user['user']); //another way to access the proprty of the object

console.log(typeof user);



// object literal with methods 
let user = {
    user: 'abc',
    age: 30,
    email: 'abc@gmail.com',
    location: 'Delhi',
    blogs: ['Hello, how are you doing', 'hello, how are you?'],
    login: function () {
        console.log('User is loged in')
    }
};