const Book = require('../models/book');

module.exports.save = (req, res, next) =>{
    const book = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author).save();
    res.status(201).jason(book);
}

module.exports.fetchAll = (req, res, next) => {
    res.json(Book.getAll());
}

module.exports.getBookById =(req, res, next) => {
    res.json(Book.getBookById(req.params.id));
} 

module.exports.deleteById = (req, res, next) => {
    new Book(req.params.id).delete();
    res.status(204).end();
}

module.exports.update = (req, res, next) => {
    new Book(req.params.id, req.body.title, req.body.price, req.body.description).update();
    res.status(204).end();
}