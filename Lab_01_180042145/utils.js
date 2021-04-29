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

//there are three types of module in js
//local module
//global module
//3rd party module/package