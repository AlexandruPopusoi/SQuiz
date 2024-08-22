import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOptionComponent } from './test-option.component';

describe('TestOptionComponent', () => {
  let component: TestOptionComponent;
  let fixture: ComponentFixture<TestOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
