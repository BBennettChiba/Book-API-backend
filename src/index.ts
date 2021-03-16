import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express';
import * as cors from 'cors';
import {getBooks, addBook, getBook, changeBook, deleteBook} from './bookManager';

const app = express();

createConnection()

app.use(cors() )
app.use(express.json());

app.get('/books', getBooks);

app.get('/books/:id', getBook);

app.post('/books', addBook)

app.put('/books/:id', changeBook);

app.delete('/books/:id', deleteBook);


app.listen(4000, () =>{
    console.log('app is listening on port 4000');
})