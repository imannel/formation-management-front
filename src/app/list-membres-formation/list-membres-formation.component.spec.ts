import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMembresFormationComponent } from './list-membres-formation.component';

describe('ListMembresFormationComponent', () => {
  let component: ListMembresFormationComponent;
  let fixture: ComponentFixture<ListMembresFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMembresFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMembresFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
