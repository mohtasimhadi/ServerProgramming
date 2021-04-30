const http = require("http");
const fs = require("./fs-module")

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.write(fs.data.index);
        res.end();
    } else if (req.url == "/about") {
        res.write(fs.data.about);
        res.end();
    } else if (req.url == "/blog") {
        res.write(fs.data.blog);
        res.end();
    } else if (req.url == "/contact") {
        res.write(fs.data.contact);
        res.end();
    } else if (req.url == "/pricing") {
        res.write(fs.data.pricing);
        res.end();
    } else if (req.url == "/services") {
        res.write(fs.data.service);
        res.end();
    } else if (req.url == "/work") {
        res.write(fs.data.work);
        res.end();
    } else {
        res.write("This Page Doesn't Exist<br><a href = '/'> Go To Base </h1>")
    }
    //console.log(req);
});

module.exports = {server};