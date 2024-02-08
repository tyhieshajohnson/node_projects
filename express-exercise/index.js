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
app.post('/users/add', (req, res) => {
    let user = {
        id: users[users.length - 1].id+1,
        name:  req.body.name,
        age: req.body.age
    }
    users.push(user);
    res.send(user);
});

app.patch('/users/edit/:id', (req, res)=> {
    // looking for a matching object with id
    let user = users.find(friend => friend.id === +req.params.id);
    //updating name value with user's parsed data
    user.name = req.body.name;
    res.send(user);

});

app.delete('/users/delete/:id', (req, res) => {
    let index = users.findIndex(friend => friend.id === +req.params.id);
    users.splice(index, 1);
    res.send(users);
});

// App.Listen host my server
app.listen( PORT, () => {
    console.log(`the server is RUNNING ON http://localhost:${PORT}`);
});