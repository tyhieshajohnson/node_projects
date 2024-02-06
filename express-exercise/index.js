import express from 'express';
import {config} from 'dotenv'
config();
const app = express();
app.use(express.json());

let PORT = process.env.PORT || 8001;

// Middleware function
function middleware(req, res, next) {
    console.log('MIDDLEWARE');
    next();
}
// Use the middleware for all routes
app.use(middleware);
// Define routes
app.get('/', (req, res) => {
    // 1. return all users in array
    res.send(users);
});

let users = [
    {id: 1, name: 'Ty', age: 22},
    {id: 2, name: 'Joel', age: 35},
    {id: 3, name: 'Matthew', age: 23},
]
// End of Middleware

function log(req, res, next) {
    console.log('I am responding');
    next();
};

app.listen( PORT, () => {
    console.log(`the server is RUNNING ON http://localhost:${PORT}`);
});