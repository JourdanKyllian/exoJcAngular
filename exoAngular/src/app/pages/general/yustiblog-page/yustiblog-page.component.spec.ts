import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YustiblogPageComponent } from './yustiblog-page.component';

describe('YustiblogPageComponent', () => {
  let component: YustiblogPageComponent;
  let fixture: ComponentFixture<YustiblogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YustiblogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YustiblogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
