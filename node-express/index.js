//The code starts by importing the express module, which is a web application framework for Node.js.
import express from 'express';
// The dotenv module is imported to load environment variables from a .env file into process.env.
import {config} from 'dotenv';
config();

// An instance of the Express application is created.
const app = express();
app.use(express.json());

// An array called languages is defined, 
// containing objects representing different programming languages.
let languages = [
    {id: 1, name: 'HTML'},
    {id: 2, name: 'Javascript'},
    {id: 3, name: 'CSS'}
];

// The code sets the PORT variable to the value of the 
// PORT environment variable if it exists. If not, it defaults to port 8001.
let PORT = process.env.PORT || 8001;

function logger(req,res,next) {
    console.log('this is logger');

    //allows us to continue with res
    next();
}

app.get('/languages', logger,(req, res)=> {
    // responding with languages
    res.send(languages);
}) 

// using an id 
//returning single item from array
app.get('/languages/:id', (req, res)=>{
    // console log foor manual error check
    // console.log(typeof req.params.id);

    // checks for an object with a matching id (the objects id and the params are trully equal)
    let language = languages.find(lang => lang.id === +req.params.id);

    // responds with the language found during search
    res.send(language);
});

//This is a route for handling POST requests to '/languages/add'
app.post('/languages/add', (req, res)=>{
    //created an object
    let language = {
        //made an id that wont repeat
        //square brackets for indexing 
        id: languages[languages.length - 1].id+1,
        //
        name:  req.body.name
    }
    // Adding the newly created 'language' object to the 'languages' array
    languages.push(language);
    // Sending the newly added language object as the response
    res.send(language);
});

//editing an object
app.patch('/languages/edit/:id', (req, res)=> {
    // looking for a matching object with id
    let language = languages.find(lang => lang.id === +req.params.id);
    //updating name value with user's parsed data
    language.name = req.body.name;
    res.send(language);

});

app.delete('/language/delete/:id', (req, res)=> {
    let index = languages.findIndex(lang => lang.id === +req.params.id);
    languages.splice(index, 1);
    res.send(languages);
})

// A route is defined for the root path '/' that handles HTTP GET requests.
// When a GET request is made to the root path, 
// the server responds by sending the languages array as a JSON response.
// app.get('/',(req, res) =>{
//     res.send(languages);
// })

// The Express app listens on the specified port (PORT).
// When the server is successfully started, a message is logged to the console indicating the 
// server's running status and the URL it's accessible at.
app.listen(PORT, ()=> {
    console.log(`the server is RUNNING ON http://localhost:${PORT}`)
})