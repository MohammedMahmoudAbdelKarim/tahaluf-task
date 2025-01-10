import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionControlComponent } from './question-control.component';

describe('QuestionControlComponent', () => {
  let component: QuestionControlComponent;
  let fixture: ComponentFixture<QuestionControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
