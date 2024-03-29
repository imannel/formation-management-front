import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormationsComponent } from './display-formations.component';

describe('DisplayFormationsComponent', () => {
  let component: DisplayFormationsComponent;
  let fixture: ComponentFixture<DisplayFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayFormationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
