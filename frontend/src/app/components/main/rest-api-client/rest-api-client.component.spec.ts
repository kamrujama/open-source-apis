import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiClientComponent } from './rest-api-client.component';

describe('RestApiClientComponent', () => {
  let component: RestApiClientComponent;
  let fixture: ComponentFixture<RestApiClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestApiClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestApiClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
