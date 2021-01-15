import { NgModule } from "@angular/core";
import { WelcomeRoutingModule } from './welcome.routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { UserDataComponent } from '../user-data/user-data.component';
import { FormsModule } from '@angular/forms';
import { BookModalComponent } from '../book-modal/book-modal.component';
import { MybooksComponent } from '../mybooks/mybooks.component';
import { MybooksModalComponent } from '../mybooks-modal/mybooks-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookstarComponent } from '../bookstar/bookstar.component';

@NgModule({
    declarations : [
        BookComponent,
        UserDataComponent,
        BookModalComponent,
        MybooksComponent,
        MybooksModalComponent,
        BookstarComponent
    ],
    imports : [
        NgbModule,
        CommonModule,
        FormsModule,
        WelcomeRoutingModule,
    ],
    exports: [
        RouterModule
    ]
})
export class WelcomeModule{}