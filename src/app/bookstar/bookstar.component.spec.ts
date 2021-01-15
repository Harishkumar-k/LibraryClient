import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstarComponent } from './bookstar.component';

describe('BookstarComponent', () => {
  let component: BookstarComponent;
  let fixture: ComponentFixture<BookstarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
