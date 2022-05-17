const { request } = require("express");
const { deleteOne } = require("../models/joke.model");
const Joke = require("../models/joke.model")//import models so the controller knows how to talk to the database 

module.exports.testJoke = (req, res) => {
res.json({msg: "This is the jokes api project"}
)};
module.exports.getAllJokes = (req,res)=>{
    Joke.find()
    .then(allFunnys=>{
        res.json({results:allFunnys})
    })
    .catch(err=>{
        res.json({msg:"There has been an error",error:err})
    })
}
module.exports.newJoke = (req, res) => {
    //request.doby represents the form information
    Joke.create(req.body)
    .then(newFunny=>{
        res.json({results:newFunny})
    })
    .catch(err=>{
        res.json({msg:"There has been an error",error:err})
    })
}
module.exports.getOneJoke = (req,res)=>{
    Joke.findOne({_id:req.params.id})
    .then(oneJoke=>{
        res.json({results:oneJoke})
    })
    .catch(err=>{
        res.json({msg:"Something is a foot here",error:err})
    })
}
module.exports.updateJoke = (req,res)=>{
    Joke.updateOne({_id:req.params.id},//which quote to update
        req.body,//gets the form information needed to update our joke
        {new:true,runValidators:true}
        )
    .then(updateJoke=>{
        res.json({results:updateJoke})
    })
    .catch(err=>{
        res.json({msg:"Something is a foot here",error:err})
    })
}
module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id:req.params.id})//which quote to delete
    .then(deleteJoke => {
        res.json({results:deleteJoke})
    })
    .catch(err=>{
        res.json({msg:"Something is a foot here",error:err})
    })
}