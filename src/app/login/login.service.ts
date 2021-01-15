import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable, BehaviorSubject } from 'rxjs';
import { register } from '../register/register';
import { map } from 'rxjs/operators';
import { login } from './login';
import { Ibook } from '../book/book';
import { bookmodal } from '../book-modal/book-modal';
import { mybooks } from '../mybooks/mybooks';
import { mybooksModal } from '../mybooks-modal/mybooks-modal';
import { userdata } from '../user-data/user-data';
@Injectable({
    providedIn :'root'
})
export class loginService{

    weburl : string = "https://localhost:44303";
    User_Name : string;
    Password : string;
    Loginmodel : login = new login();
    public isLoading = new BehaviorSubject(false);
    private currentUserSubject: BehaviorSubject<login>;
    public currentUser: Observable<login>;

    constructor(private http : HttpClient){
        this.currentUserSubject = new BehaviorSubject<login>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public checkUser(Email : String,password :String):Observable<boolean> {
        var result=  this.http.get<boolean>(this.weburl + "/User/CheckUser",
        {
            params:
            {
                Email : Email.toString(),
                Password : password.toString()
            }
        });
        return result;
    }

    public get currentUserValue(): login {
        return this.currentUserSubject.value;
    }

    getBooks() :Observable<Ibook[]>{
        return this.http.get<Ibook[]>(this.weburl + "/Book/GetAllBooks");
    }

    getBooksbyid(BookId : number) :Observable<bookmodal>{
        return this.http.get<bookmodal>(this.weburl + "/Book/GetBooksByID",
        {
            params:
            {
                bookid : BookId.toFixed()
            }
        });
    }

    login(Login: login): Observable<login>{
        return this.http.post<login>(this.weburl + "/User/CheckUser",Login,
        {
            headers:{
                'Content-Type' : 'application/json'
            }
        }).pipe(map(user=> {
            this.Loginmodel=user;
            localStorage.setItem('currentUser',JSON.stringify(this.Loginmodel));
            this.currentUserSubject.next(user);
            console.log(localStorage.getItem('currentUser'));
            return user;
        }));
    }


    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    public setLoading(isLoad : boolean)
    {
        this.isLoading.next(isLoad);
    }

    public AddUser(reg:register) : Observable<string> {
        return this.http.post<string>(this.weburl + "/User/AddUser",reg,{
            headers:{
                'Content-Type' : 'application/json'
            }
        });
    }

    public AddUserBook(BookModal : bookmodal) :Observable<string>{
        return this.http.post<string>(this.weburl + "/UserBook/AddUserBook",BookModal,{
            headers:{
                'Content-Type' : 'application/json'
            }
        });
    }

    GetUserBookbyUserid(usrid : number) :Observable<mybooks[]>{
        return this.http.get<mybooks[]>(this.weburl + "/UserBook/GetUserBookbyUserid",
        {
            params:
            {
                userid : usrid.toFixed()
            }
        });
    }

    public UpdateUserBook(myBookModal : mybooksModal) :Observable<string>{
        return this.http.put<string>(this.weburl + "/UserBook/UpdateUserBook",myBookModal,{
            headers:{
                'Content-Type' : 'application/json'
            }
        });
    }

    GetAllUserBook(usrid : number) :Observable<mybooks[]>{
        return this.http.get<mybooks[]>(this.weburl + "/UserBook/GetAllUserBook",
        {
            params:
            {
                userid : usrid.toFixed()
            }
        });
    }
    UpdateUserDetails(Userdata:userdata):Observable<string>{
        return this.http.put<string>(this.weburl + "/User/UpdateUserDetails",Userdata,{
            headers:{
                'Content-Type' : 'application/json'
            }
        });
    }
}