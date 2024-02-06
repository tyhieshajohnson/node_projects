// Imports the http module, which is a built-in module in Node.js used for creating HTTP servers.
import http from 'http'; 

// Declares a constant variable PORT and assigns it the value 7896. 
// This is the port on which the server will listen.
const PORT = 7896;

// methods - functions inside of obkects
//always takes in callback function 
// var server = http.createServer(function(req, res http Response))

// Creates an HTTP server using http.createServer(). 
// The server takes a callback function with request (req) and 
// response (res) parameters to handle incoming HTTP requests.

var server = http.createServer((req, res)=> {
    // res.write('Hello Tyhiesha Johnson');
    // res.end();

    // Handles incoming requests based on the requested URL (req.url).
    if (req.url === '/'){
        res.write('Hello Tyhiesha Johnson');
        res.end();
    }
    if (req.url === '/api') {
        res.write('JSON.stringify([1, 2, 3, 4])');
        res.end();
    }
});
// send as a request and backend is a response

//Hosting the code using - LISTEN
//1. first listen is the port itself
// server.listen(port)

// Makes the server listen on the port specified by the environment 
// variable process.env.PORT (if it exists), or on the default port PORT (7896).
server.listen(process.env.PORT || PORT);
/// function to handle errors

// Logs a message indicating that the server is running and 
// specifies the URL where it can be accessed (http://localhost:7896).
console.log(`the server is RUNNING ON http://localhost:${PORT}`);