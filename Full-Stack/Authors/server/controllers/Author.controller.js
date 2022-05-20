const Author= require("../models/Author.model");
// module.exports.index = (request, response) => {response.json({message: "Hello World"});}

module.exports.testAuthor= (req, res) => {
    res.json({
        msg: "This is the Authors api project"
    })
};
module.exports.getAllAuthor= (req, res) => {
    Author.find()
        .then(allAuthor => {
            res.json({
                results: allAuthor
            })
        })
        .catch(err => {
            res.json({
                msg: "There has been an error",
                error: err
            })
        })
}
module.exports.newAuthor= (req, res) => {
    //request.body represents the form information
    Author.create(req.body)
        .then(newAuthor=> {
            res.json({
                results: newAuthor
            })
        })
        .catch(err => {
            res.json({
                msg: "There has been an error",
                error: err
            })
        })
}
module.exports.getOneAuthor= (req, res) => {
    Author.findOne({
            _id: req.params.id
        })
        .then(oneAuthor=> {
            res.json({
                results: oneAuthor
            })
        })
        .catch(err => {
            res.json({
                msg: "Something is a foot here",
                error: err
            })
        })
}
module.exports.updateAuthor= (req, res) => {
    Author.updateOne({
                _id: req.params.id
            }, //which quote to update
            req.body, //gets the form information needed to update our Author
            {
                new: true,
                runValidators: true
            }
        )
        .then(updateAuthor=> {
            res.json({
                results: updateAuthor
            })
        })
        .catch(err => {
            res.json({
                msg: "Something is a foot here",
                error: err
            })
        })
}
module.exports.deleteAuthor= (req, res) => {
    Author.deleteOne({
            _id: req.params.id
        }) //which quote to delete
        .then(deleteAuthor=> {
            res.json({
                results: deleteAuthor
            })
        })
        .catch(err => {
            res.json({
                msg: "Something is a foot here",
                error: err
            })
        })
}