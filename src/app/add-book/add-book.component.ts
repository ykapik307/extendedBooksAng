import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import {BooksService} from '../books.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book:Books=new Books();
  constructor(private bookService:BooksService,private router:Router) { }

  ngOnInit(): void {
  }

 
  saveBook(){
    this.bookService.addNewBook(this.book).subscribe(data=>{
      console.log(data);
      this.goToBookList();
    },
    error =>console.log(error))
  }
  goToBookList(){
    this.router.navigate(['/book-list']);
  }
  onSubmit(){
    this.saveBook();
  }
}
