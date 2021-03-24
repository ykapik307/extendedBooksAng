import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Books } from './books';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl="https://rest-api-kp.herokuapp.com/books";
  // "";
  constructor(private httpClient:HttpClient) { }
  getBookList():Observable<Books[]>{
    return this.httpClient.get<Books[]>(`${this.baseUrl}`);
  }
  addNewBook(book:Books):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,book);
  }
  getBookById(id:number):Observable<Books>{
    return this.httpClient.get<Books>(`${this.baseUrl}/${id}`);
  }
  deleteBookById(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
