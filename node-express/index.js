import express from 'express';
import {config} from 'dotenv';
config();

const app = express();

let PORT = process.env.PORT || 8001;

app.get('/',(req, res) =>{
    res.send('<h1>Welcome!</h1>');
})

app.listen(PORT, ()=> {
    console.log(`the server is RUNNING ON http://localhost:${PORT}`)
})