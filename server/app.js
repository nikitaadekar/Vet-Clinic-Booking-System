//importing the package
import Express from "express";

//executing the package by putting it in a constant variable
const app = Express();

//Routes 
app.get('/',(req,res)=> {
    res.send('hello world!');
});


//listening to the server
app.listen(4000);
