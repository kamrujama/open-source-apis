import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringManipulationToolComponent } from './string-manipulation-tool.component';

describe('StringManipulationToolComponent', () => {
  let component: StringManipulationToolComponent;
  let fixture: ComponentFixture<StringManipulationToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringManipulationToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringManipulationToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
