const Author = require('../models/author.models');

module.exports = {

    findAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthors) => {
                res.json(allAuthors)
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
        },

    index: (req, res) => {
        res.json({
            message: "Authors"
        });
    },

    createAuthor: (req, res) => {
        console.log(req.body)
        Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
    },
    
    
    getAuthor: (req, res) => {
        Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
    },
    
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });},
        
        updateAuthor: (req, res) => {
            Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
            .then(updateAuthor => respoonse.json(updateAuthor))
            .catch(err => res.json(err))
        }
}