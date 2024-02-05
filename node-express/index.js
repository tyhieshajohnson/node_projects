import express from 'express';
import {config} from 'dotenv';
config();

const app = express();

let languages = [
    {id: 1, name: 'HTML'},
    {id: 2, name: 'Javascript'},
    {id: 3, name: 'CSS'}
];

let PORT = process.env.PORT || 8001;

app.get('/',(req, res) =>{
    res.send(languages);
})

app.listen(PORT, ()=> {
    console.log(`the server is RUNNING ON http://localhost:${PORT}`)
})
