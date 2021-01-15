import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component"
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { loginService } from './login/login.service';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { ErrorInterceptor } from './helper/error.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { LoadingInterceptor } from './loading/loding.Interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';
import { BookstarComponent } from './bookstar/bookstar.component';
import { TransbooksComponent } from './transbooks/transbooks.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    LoadingComponent,
    TransbooksComponent
  ],

  imports: [
    ToastrModule.forRoot(),
    ModalModule,
    ToastContainerModule,
    BrowserAnimationsModule,
    TooltipModule,
    PopoverModule,
    ButtonsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    AppRoutingModule
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
      deps: [loginService]
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor,
      multi: true,
      deps: [loginService]
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptor, 
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
