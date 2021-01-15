import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { register } from '../register/register';
import { loginService } from '../login/login.service';
import { Ibook } from './book';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { BookModalComponent } from '../book-modal/book-modal.component';
import { ToastrService } from 'ngx-toastr';
import { Observer, Observable } from 'rxjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  Email: string;
  Book : Ibook[];
  starWidth:number;
  title : string;

  constructor(
    private LoginService : loginService,
    private modalService: NgbModal,
    private toastr: ToastrService) {
      this.LoginService.getBooks().subscribe(book => 
        {
          this.Book=book;
          console.log(this.Book)
        } );
     }
  
  // ngOnChanges(): void {
  //   // this.starWidth=this.Book.rating_id * 75 / 5;
  // }

  showSuccess() {
  this.toastr.success('Hello world!', 'Toastr fun!', {
    progressAnimation : "increasing",
    timeOut: 2000,
    tapToDismiss : true,
    progressBar : true
  });
  }

  // showbooks():Observable<Ibook>{
  //   return this.Book;
  // }

  OnClick(value : string){
    // this.showSuccess();
    const modalRef = this.modalService.open(BookModalComponent,{ size:  'md'})
    // this.modalService.open( );
    modalRef.componentInstance.bookid = value;
    // console.log(value);
  }
  
  ngOnInit(): void {
    
  }

}
