import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import{AddBookComponent} from './add-book/add-book.component';
import {UpdateBookComponent} from './update-book/update-book.component';
import{SearchBookComponent} from './search-book/search-book.component';

const routes: Routes = [
  {path:'add-book',component:AddBookComponent},
  {path:'',redirectTo:'add-book',pathMatch:'full'},
  {path:'book-list',component:BookListComponent},
  {path:'update-book/:id',component:UpdateBookComponent},
  {path:'search-books',component:SearchBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
