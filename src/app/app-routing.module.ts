import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetalisComponent } from './product-detalis/product-detalis.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  {path:'signup',component:RegisterComponent},
  {path:'',component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:'product-detalis/:id',component:ProductDetalisComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
