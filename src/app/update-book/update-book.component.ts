import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import{BooksService} from '../books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book:Books=new Books();
  id:number;
  constructor(private bookService:BooksService,private router:Router,private routee:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.routee.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data =>{
      this.book=data;
    },error=>console.log(error)
    )
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
