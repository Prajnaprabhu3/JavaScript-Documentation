// Asynchrous code is which can start now and end later 
// Javascript is synchronous language where only one statement can be executed at a time 

// Javascript is a single threaded language: 
// Thread is like ordered sequence statement 
// One sequence executed at a time 

// Task that take some time to be done- requesting data from an api 

console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired');
}, 2000);  //this function starts when the file starts and completed after 2sec

console.log(3);
console.log(4);

// The output of the above code would be
// 1
// 2
// 3
// 4
// callback function fired


// ......... HTTP Requests ......
// Make HTTP request to get data from another server
// We make these requests using API endpoints
// API endpoint is basically a url
// we get the data back in the form of json 