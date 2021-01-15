import { Component, OnInit } from '@angular/core';
import { loginService } from '../login/login.service';
import { mybooks } from './mybooks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MybooksModalComponent } from '../mybooks-modal/mybooks-modal.component';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  MyBook : mybooks[];
  userID : number;
  constructor(
    private LoginService : loginService,
    private modalService: NgbModal) { 
    this.userID=this.LoginService.currentUserValue.user_ID;
    this.LoginService.GetUserBookbyUserid(this.userID)
      .subscribe(book => 
      {
        this.MyBook=book;
        console.log(this.MyBook)
      } );
  }

  OnClick(book_id : number,userBook_id:number,user_ID : number,new_Book_Count : number){
    const modalRef = this.modalService.open(MybooksModalComponent);
    modalRef.componentInstance.userBook_id=userBook_id;
    modalRef.componentInstance.book_id = book_id;
    modalRef.componentInstance.user_ID = this.userID;
    modalRef.componentInstance.new_Book_Count = new_Book_Count;
    console.log(modalRef.componentInstance);
  }

  ngOnInit(): void {
  }

}
