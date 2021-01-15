import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { loginService } from '../login/login.service';
import { Ibook } from '../book/book';
import { bookmodal } from './book-modal';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})

export class BookModalComponent implements OnInit,OnDestroy,OnChanges {
  
  starWidth:number;
  title : string;

  ngOnDestroy(): void {
    this.router.navigateByUrl('/My Books',{ skipLocationChange: true }).then(() => {
      this.router.navigate(['/Book']);
    });
  }

  ngOnChanges(): void {
    this.starWidth=this.BookModal.rating_id * 75 / 5;
  }

  @Input() bookid :number;
  Book : Ibook = new Ibook();
  BookModal : bookmodal = new bookmodal();
  result : string;
  constructor(
    public activeModal: NgbActiveModal,
    private LoginService : loginService,
    private router: Router,
    private toastr: ToastrService) { }
  
  Close() : void{
    this.activeModal.dismiss();
  }

  Borrow() : void{
    this.LoginService.AddUserBook(this.BookModal).subscribe(
      Result => {
        this.result=Result ;
        if(this.result=="Row Inserted")
        {
          this.showSuccess();
          this.activeModal.dismiss();
        }
        else{
          console.log(this.result)
        }
      }
    )
    
  }

  showSuccess() {
    this.toastr.success('Book Borrowed Successfully', 'Success', {
      progressAnimation : "increasing",
      timeOut: 3000,
      tapToDismiss : true,
      progressBar : true
    });
  }

  ngOnInit(): void {
    this.LoginService.getBooksbyid(this.bookid).subscribe(
      book => {
        this.BookModal=book;
        this.BookModal.new_Book_Count =this.BookModal.new_Book_Count - 1;
        this.BookModal.user_ID=this.LoginService.currentUserValue.user_ID;
        this.title=this.BookModal.rating;
        this.BookModal.rating_id=this.BookModal.rating_id * 100 / 5;
        this.BookModal.status_Id=1;
        console.log(this.BookModal);
      }
    )
  }

}
