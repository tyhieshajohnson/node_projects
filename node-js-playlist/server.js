// require allows us to override the default implementation for the require module and the require module itself for performance reasons and performance considerations when using the require module directly instead of the require module itself
// always use import instead of the require 
import http from 'http'; 
const PORT = 7896;
// methods - functions inside of obkects
//always takes in callback function 
// var server = http.createServer(function(req, res http Response)) 
var server = http.createServer((req, res)=> {
    res.write('Hello Tyhiesha Johnson');
    res.end();
});
// send as a request and backend is a response

//Hosting the code using - LISTEN
//1. first listen is the port itself
// server.listen(port)
server.listen(process.env.PORT || PORT);
/// function to handle errors
console.log(`the server is RUNNING ON http://localhost:${PORT}`);