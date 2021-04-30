const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.write("<h1>This is base URL</h1>");
        res.end();
    } else if (req.url == "/home") {
        res.write("<h1>This is Home Page</h1>")
        res.end();
    } else {
        res.write("This Page Doesn't Exist<br><a href = '/'> Go To Base </h1>")
    }
    //console.log(req);
});

module.exports = {server};