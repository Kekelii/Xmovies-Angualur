import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbytitleComponent } from './sortbytitle.component';

describe('SortbytitleComponent', () => {
  let component: SortbytitleComponent;
  let fixture: ComponentFixture<SortbytitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbytitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortbytitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
