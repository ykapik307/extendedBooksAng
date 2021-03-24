import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bookName:any;
  BaseUrl:any;
  bookss=[];
 
   i:number;
   
  onSubmit(){
    console.log(this.bookName);
    this.BaseUrl=`https://openlibrary.org/search.json?q=+${this.bookName}`;
    console.log(this.BaseUrl);
    fetch(this.BaseUrl)
    .then(response => response.json())
    .then(data => {
      for(this.i=0;this.i<3;this.i++)
      {
        this.bookss[this.i]=data.docs[this.i];
      }
      console.log(this.bookss);
      
   
    })
   
  }
}
