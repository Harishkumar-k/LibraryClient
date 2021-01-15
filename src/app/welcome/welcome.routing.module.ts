import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookComponent } from '../book/book.component';
import { UserDataComponent } from '../user-data/user-data.component';
import { AuthGuard } from '../helper/auth.guard';
import { MybooksComponent } from '../mybooks/mybooks.component';
import { TransbooksComponent } from '../transbooks/transbooks.component';

@NgModule({
    declarations : [],
    imports :[
        CommonModule,
        RouterModule.forChild([
            {path: 'user' , component : UserDataComponent,canActivate: [AuthGuard]},
            {path: 'Book' , component: BookComponent ,canActivate: [AuthGuard]},
            {path: 'My Books' , component: MybooksComponent ,canActivate: [AuthGuard]},
            {path: 'My AllBooks' , component : TransbooksComponent,canActivate: [AuthGuard]},
        ]),
    ],
})
export class WelcomeRoutingModule{}