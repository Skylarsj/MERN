const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
Joke.find()
    .then((allJokes) => {
        res.json(allJokes)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });
}

module.exports.findOneJoke = (req, res) => {
Joke.findOne({ _id: req.params.id })
    .then(oneJoke => {
        res.json({ joke: oneJoke })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });}

module.exports.createJoke = (req, res) => {
Joke.create(req.body)
    .then(newJoke => {
        res.json(newJoke)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });}

module.exports.updateJoke = (req, res) => {
Joke.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
)
    .then(updatedJoke => {
        res.json(updatedJoke)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });}

module.exports.deleteJoke = (req, res) => {
Joke.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });}