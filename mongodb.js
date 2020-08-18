module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb://127.0.0.1:27017/blog-info', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}