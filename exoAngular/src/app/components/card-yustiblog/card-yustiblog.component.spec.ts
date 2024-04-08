import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardYustiblogComponent } from './card-yustiblog.component';

describe('CardYustiblogComponent', () => {
  let component: CardYustiblogComponent;
  let fixture: ComponentFixture<CardYustiblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardYustiblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardYustiblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
