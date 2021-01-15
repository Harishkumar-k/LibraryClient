import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login.routing.module';
import { WelcomeModule } from '../welcome/welcome.module';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    
    imports: [
        CommonModule,
        // FormsModule,
        LoginRoutingModule,
        WelcomeModule,
        NgbModule
    ],
    exports:[
        RouterModule,
        WelcomeComponent
    ],
    declarations:[
        WelcomeComponent
    ]
    
})
export class LoginModule{}