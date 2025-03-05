import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Books', component: BooksManagementComponent },
  { path: 'Login', component: LoginComponent },
];
