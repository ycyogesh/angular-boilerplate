import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormsComponent } from './simple-forms.component';

describe('SimpleFormsComponent', () => {
  let component: SimpleFormsComponent;
  let fixture: ComponentFixture<SimpleFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleFormsComponent]
    });
    fixture = TestBed.createComponent(SimpleFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
