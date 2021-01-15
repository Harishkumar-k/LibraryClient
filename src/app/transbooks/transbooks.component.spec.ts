import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransbooksComponent } from './transbooks.component';

describe('TransbooksComponent', () => {
  let component: TransbooksComponent;
  let fixture: ComponentFixture<TransbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
