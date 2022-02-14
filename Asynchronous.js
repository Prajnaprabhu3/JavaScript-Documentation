// Asynchrous code is which can start now and end later 
// Javascript is synchronous language where only one statement can be executed at a time 

// Javascript is a single threaded language: 
// Thread is like ordered sequence statement 
// One sequence executed at a time 

// Task that take some time to be done- requesting data from an api 

// console.log(1);
// console.log(2);

// setTimeout(() => {
// console.log('callback function fired');
// }, 2000);  //this function starts when the file starts and completed after 2sec

// console.log(3);
// console.log(4);

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


// The code 
// The below code can be made more reusable by putting it inside a const function 
// const request = new XMLHttpRequest(); //creates a request object, this request object can work with any kind of data json, xml, html etc

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status === 200) { //point when request is complete
//         //    even when request.readyState is equal to 4 , there might be some error so we use status as well 
//         // to understand different status code, got to mdn and check. Get back to this video later 

//         console.log(request.responseText);
//     }
//     else if (request.readyState === 4) {
//         console.log("could not fetch the data");
//     }
// });

// // send a request 
// // request.method('kindOfRequest',whereToMakeTheRequest(endpoint))
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send(); //code used to send the request


const getTodos = (callback) => {
    const request = new XMLHttpRequest(); //creates a request object, this request object can work with any kind of data json, xml, html etc

    request.addEventListener('readystatechange', () => {
        console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            callback(undefined, request.response.Text);
            // callback(no-error - so undefined, data- so request.response.Text)
        }
        else if (request.readyState === 4) {
            // console.log("could not fetch the data");
            callback('could not fetch data', undefined);
            // callback('error message', no - data - so undefined)
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();


};

console.log(1);
console.log(2);

// getTodos(); // this just calls the above function

// if we can pass a callback function 
getTodos((error, data) => {
    console.log('callback fired');
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
});

console.log(3);
console.log(4);

// output will be:
// 1
// 2
// 3
// 4
// callback fired
// the data