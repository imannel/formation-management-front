import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignMemberFormationComponent } from './assign-member-formation.component';

describe('AssignMemberFormationComponent', () => {
  let component: AssignMemberFormationComponent;
  let fixture: ComponentFixture<AssignMemberFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignMemberFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignMemberFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
