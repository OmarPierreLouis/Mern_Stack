const mongoose = require('mongoose'); //Mongoose connection
// Purpose of this file is to describe how our  collection(table) should look. 
const AuthorSchema = new mongoose.Schema({
    author: { //Each Key will represent a catagory in our collection
        type: String,
        required:[true,"Error"],minlength:[3,"Submittion must be at least 3 charaters!"]
    }
})









const Product = mongoose.model("Author",AuthorSchema)

module.exports = Product;








// actionsAvalible: {
    //     type: Number,
        // required:[true,"Author is required"],
        // minlength:[5,"Author must be 5 charaters"]
    // },
    // Description: {
    //     type: String,
        // min: [1,"Rating must be atleast 1"],
        // max:[10,"Rating can not be more than 10"]
    // }
    // date:{
    //     type:Date,
    //     required: [true,"date is required"],
    //     min:['1991-06-25',"Cant be before my birthday"],
    // }
    //FOR POSSIBLE CHECK BOX
    // isOver21:{
    //     type:Boolean
    // }
    // if you want an optional field you dont need the required part of the validation
// }
// , {
//     timestamps: true


