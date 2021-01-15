import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-bookstar',
  templateUrl: './bookstar.component.html',
  styleUrls: ['./bookstar.component.css']
})
export class BookstarComponent implements OnInit,OnChanges {
  
  starWidth:number;
  @Input() rating:number;
  @Input() title : string;
  
  constructor() { 
    // this.starWidth=this.rating * 100 / 5;
  }

  ngOnChanges(): void {
    this.starWidth=this.rating * 100 / 5;
  }

  ngOnInit(): void {
  }

}
