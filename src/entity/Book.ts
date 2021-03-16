import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Author} from './Author';

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Title: string;
    
    @ManyToOne( () => Author, author => author.fullName, {cascade: true})
    author: Author;

}
