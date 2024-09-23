import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64EncoderDecoderComponent } from './base64-encoder-decoder.component';

describe('Base64EncoderDecoderComponent', () => {
  let component: Base64EncoderDecoderComponent;
  let fixture: ComponentFixture<Base64EncoderDecoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64EncoderDecoderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Base64EncoderDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
