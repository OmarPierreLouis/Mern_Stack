const { json } = require("body-parser");
const express = require("express");
// This is how we import express
const app = express();
// We created an app variable whic is an instance of express
const port = 8000;
// Need these for post request 
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
// allows you to parsh form information 

let badBitches = [
    {Baddie: "Zendaya",ThirstLevel: "9"},
    {Baddie: "Draya",ThirstLevel: "8"},
    {Baddie: "Mo",ThirstLevel: "12"},
    {Baddie: "Risse",ThirstLevel: "7.9"},

]
// req is shorthand for request
// res is shorthand for response
// created our api endpoint here (must have "/api")
// app.get accepts a string as the route and a call back function( arrow function)
app.get("/api/loc", (req, res) => {
    res.json({
        Where_you_from: "Whats Cracking Loc?"
    });
});
app.get("/api/baddies",(req,res)=>{
    res.json({Count:badBitches.length, results:badBitches})
});
// Get one baddie based off position (Index or ID)
app.get("/api/baddies/:index",(req,res)=>{
    res.json({results:badBitches[req.params.index]})
});

// create a new baddie
app.post("/api/baddies",(req,res)=>{
    console.log("This is the request.body-->",req.body)
    // req.body is the new imformation submitted into our form 
    badBitches.push(req.body)
    res.json({Count:badBitches.length, results:badBitches});
});
// Update quote based off of the index number
app.put("/api/baddies/:index", (req, res) => {
    c[req.params.index] = req.body;
    // update the api at the specifc index with the information from the form(req.body)
    // res.json({Count:badBitches.length, results:badBitches});
    res.json(badBitches[req.body])
    
});
app.delete("/api/baddies/:index",(req,res)=>{
    const index = req.params.index;
    badBitches.splice(index)
    res.json({Count:badBitches.length, results:badBitches});
})


// This line is needed at the bottom of your code in order to run route
app.listen(port, () => console.log(`Listening on port: ${port}`));