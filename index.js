const http = require('http');
const host = '127.0.0.1';
const port = 5000; 
const routes = require('./httpserver/getblogs');

http.createServer((req, res) => {
    routes(req,res);
}).listen(port,host, () => {
    console.log(`Started server on http://${host}:${port}`)
});