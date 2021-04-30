const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    res.write("Hello!");
    res.end();
});

server.listen(7777);