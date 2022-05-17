
const express = require("express");//Importing Express
const app = express(); // Setting an instance of express to app for our routes
const port = 8000; //Setting out local host to an variable
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./server/config/mongoose.config')
require('./server/routes/joke.routes')(app);//Make sure this is below all the app.Use commands or else it will throw errors 


app.listen(port, ()=>console.log(`Listening on port ${port}`));