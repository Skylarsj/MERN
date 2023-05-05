const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.01:27017/server', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to database'))
    .catch(err => console.log('something went wrong connecting to database', err));