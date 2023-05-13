const Author = require('../models/author.models');

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
    }

module.exports.index = (req, res) => {
    res.json({
        message: "Authors"
    });
}
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(updateAuthor => respoonse.json(updateAuthor))
    .catch(err => res.json(err))
}