import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalideComponent } from './formvalide.component';

describe('FormvalideComponent', () => {
  let component: FormvalideComponent;
  let fixture: ComponentFixture<FormvalideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormvalideComponent]
    });
    fixture = TestBed.createComponent(FormvalideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
