import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../helper/auth.guard';


@NgModule({
    declarations:[],
    imports : [
        CommonModule,
        RouterModule.forChild([
            {path: 'Welcome' , component : WelcomeComponent,canActivate: [AuthGuard]},
            {path: 'Sign Up' , component : RegisterComponent},
        ]),
    ],

})
export class LoginRoutingModule{}