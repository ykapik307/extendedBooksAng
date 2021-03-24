import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import {BooksService} from '../books.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Books[];
  constructor(private bookService:BooksService,private router:Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getBookList().subscribe(data=>{
      this.books=data;
    })
  }
  updateBook(id:number){
    this.router.navigate(['update-book',id]);
  }
  deleteBook(id:number){
    this.bookService.deleteBookById(id).subscribe(data=>{
      console.log(data);
       this.getAllBooks();                        //  As after deletion we want to see the list of books we need to call the getallBooks meathod
    })
  }
}
