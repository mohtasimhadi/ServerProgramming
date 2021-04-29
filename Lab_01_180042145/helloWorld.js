const Hello = ()=>{
    console.log("Hello World!");
};

const firstName = "Mohtasim";


//exporting as a module
module.exports = {Hello, firstName};
//another way
module.exports.lastName = "Hadi Rafi";

//console.log(module);