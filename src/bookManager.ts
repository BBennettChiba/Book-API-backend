
import { getRepository } from 'typeorm';
import { Author } from './entity/Author';
import {Book} from './entity/Book';
// import {Author} from './entity/Author';

export const getBooks = async (req, res) =>{
    const bookDepository = getRepository(Book);
    
    let books = await bookDepository.find({relations:["author"]});
    res.send(books);
}

export const getBook = async (req, res) =>{
    const bookDepository = getRepository(Book);
    let key = isNaN(req.params.id) ? 'title': 'id';
    const query = {};
    query[key] = req.params.id;
    let book = await bookDepository.findOne({relations:['author']});
    res.send(book);
}

export const addBook =  async (req, res) =>{
    const bookDepository = await getRepository(Book);
    const AuthorDepository = await getRepository(Author);
    const newBook = new Book();
    const newAuthor = new Author();
    newAuthor.fullName = req.body.author;
    newBook.Title = req.body.title;
    newBook.author = newAuthor;
    await AuthorDepository.save(newAuthor);
    await bookDepository.save(newBook);
    res.send(newBook);
}

export const changeBook = async (req, res) => {
    const bookDepository = await getRepository(Book);
    const AuthorDepository = await getRepository(Author);
    let book = await bookDepository.findOne( {id: req.params.id});
    let newAuthor = new Author();
    console.log(req.body);
    newAuthor.fullName = req.body.author;
    book.Title = req.body.title;
    book.author = newAuthor;
    book = await bookDepository.save(book);
    await AuthorDepository.save(newAuthor);
    console.log(newAuthor);
    res.send(book);
}

export const deleteBook = async (req, res) =>{
    const bookDepository = await getRepository(Book);
    await bookDepository.delete({id: req.params.id})
    res.send('Book successfully deleted')
}