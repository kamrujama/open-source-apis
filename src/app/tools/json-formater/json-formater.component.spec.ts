import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormaterComponent } from './json-formater.component';

describe('JsonFormaterComponent', () => {
  let component: JsonFormaterComponent;
  let fixture: ComponentFixture<JsonFormaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonFormaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonFormaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
