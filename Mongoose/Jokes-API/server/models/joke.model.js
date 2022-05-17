const mongoose = require('mongoose'); //Mongoose connection
// Purpose of this file is to describe how our quotes collection(table) should look. 
const JokeSchema = new mongoose.Schema({
    setup: { //Each Key will represent a catagory in our collection
        type: String,
        // required:[true,"Error"],minlength:[2,"Submittion must be at least 2 charaters!"]
    },
    punchline:{
        type:String,
        // required:[true,"Author is required"],
        // minlength:[5,"Author must be 5 charaters"]
    },
    rating:{
        type:Number,
        // min: [1,"Rating must be atleast 1"],
        // max:[10,"Rating can not be more than 10"]
    },
},{timestamps:true})

const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke;
