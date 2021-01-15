import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { loginService } from '../login/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { mybooksModal } from './mybooks-modal';

@Component({
  selector: 'app-mybooks-modal',
  templateUrl: './mybooks-modal.component.html',
  styleUrls: ['./mybooks-modal.component.css']
})
export class MybooksModalComponent implements OnInit,OnDestroy {

  MybooksModal : mybooksModal = new mybooksModal();
  @Input() user_ID : number;
  @Input() book_id : number;
  @Input() new_Book_Count : number;
  @Input() userBook_id : number;
  currentRate : number;

  constructor(
    private LoginService : loginService,
    private toastr: ToastrService,
    private router: Router,
    public activeModal: NgbActiveModal,
    public config: NgbRatingConfig
  ) { config.max = 5;}

  Close() : void{
    this.activeModal.dismiss();
  }

  showSuccess() {
    this.toastr.success('Book Returned Successfully', 'Success', {
      progressAnimation : "increasing",
      timeOut: 3000,
      tapToDismiss : true,
      progressBar : true
    });
  }

  return() : void{
    console.log(this.currentRate);
    this.MybooksModal.book_id=this.book_id;
    this.MybooksModal.new_Book_Count=this.new_Book_Count + 1;
    this.MybooksModal.user_ID=this.user_ID;
    this.MybooksModal.userBook_id=this.userBook_id;
    console.log(this.MybooksModal);
    this.LoginService.UpdateUserBook(this.MybooksModal).subscribe(
      result => {
        if(result=="Data Updated")
        {
          this.showSuccess();
          this.activeModal.dismiss();
        }
        else{
          console.log(result)
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.router.navigateByUrl('/Book',{ skipLocationChange: true }).then(() => {
      this.router.navigate(['/My Books']);
    });
  }

  ngOnInit(): void {
  }

}
