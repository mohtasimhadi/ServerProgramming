// importing helloWorld.js
const HelloFunc = require('./helloWorld');

//HelloFunc.Hello();
//console.log(HelloFunc.firstName + " " + HelloFunc.lastName);


//interval
setInterval(() => {
    HelloFunc.Hello();
}, 1000);


//timeout
setTimeout(() => {
    console.log(HelloFunc.firstName, HelloFunc.lastName);
}, 5000);

//console.log(HelloFunc);