import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
    [
        {path : 'Sign In', component : LoginComponent},
        {path:'',redirectTo:'Sign In',pathMatch:'full'},
        {path:'**',redirectTo:'Sign In',pathMatch:'full'}
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
