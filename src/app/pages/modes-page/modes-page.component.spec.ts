import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModesPageComponent } from './modes-page.component';

describe('ModesPageComponent', () => {
  let component: ModesPageComponent;
  let fixture: ComponentFixture<ModesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
