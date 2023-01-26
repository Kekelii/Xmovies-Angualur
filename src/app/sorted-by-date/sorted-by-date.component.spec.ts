import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedByDateComponent } from './sorted-by-date.component';

describe('SortedByDateComponent', () => {
  let component: SortedByDateComponent;
  let fixture: ComponentFixture<SortedByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortedByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
