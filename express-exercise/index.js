import express from 'express';
import {config} from 'dotenv'
config();
const app = express();
app.use(express.json());

let PORT = process.env.PORT || 8001;

let users = [
    {id: 1, name: 'Ty', age: 22},
    {id: 2, name: 'Joel', age: 35},
    {id: 3, name: 'Matthew', age: 23},
]

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
// End of Middleware

//2. Calling via an ID
app.get('/users/:id', (req, res) => {
    let user = users.find(friend => friend.id === +req.params.id);
    res.send(user);
});

// 2. Add new people into the array
app.post('/users', (req, res) => {
    
});


// App.Listen host my server
app.listen( PORT, () => {
    console.log(`the server is RUNNING ON http://localhost:${PORT}`);
});