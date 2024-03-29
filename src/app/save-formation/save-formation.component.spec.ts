import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFormationComponent } from './save-formation.component';

describe('SaveFormationComponent', () => {
  let component: SaveFormationComponent;
  let fixture: ComponentFixture<SaveFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
