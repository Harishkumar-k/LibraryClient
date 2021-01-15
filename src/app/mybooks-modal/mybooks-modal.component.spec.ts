import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybooksModalComponent } from './mybooks-modal.component';

describe('MybooksModalComponent', () => {
  let component: MybooksModalComponent;
  let fixture: ComponentFixture<MybooksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybooksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybooksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
