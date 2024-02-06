import express from 'express';
import {config} from 'dotenv'
config();
const app = express();
app.use(express.json());

let users = [
    {id: 1, name: 'Ty', age: 22},
    {id: 2, name: 'Joel', age: 35},
    {id: 3, name: 'Matthew', age: 23},
]

let PORT = process.env.PORT || 8001;

// function log(req, res, next) {
//     console.log('I am responding');
//     next();
// };

// 1. return all users in array
app.get('/', (req, res)=> {
    // responding with languages
    res.send(users);
})

app.listen( PORT, () => {
    console.log(`the server is RUNNING ON http://localhost:${PORT}`);
});