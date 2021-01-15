import { Component, OnInit } from '@angular/core';
import { loginService } from '../login/login.service';
import { Ibook } from '../book/book';
import { mybooks } from '../mybooks/mybooks';

@Component({
  selector: 'app-transbooks',
  templateUrl: './transbooks.component.html',
  styleUrls: ['./transbooks.component.css']
})
export class TransbooksComponent implements OnInit {

  MyBook : mybooks[];
  userID: number;

  constructor(private LoginService : loginService) {
    this.userID=this.LoginService.currentUserValue.user_ID;
    this.LoginService.GetAllUserBook(this.userID).subscribe(book => 
      {
        this.MyBook=book;
        console.log(this.MyBook)
      } );
   }

  ngOnInit(): void {
  }

}
