import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysDescriptionComponent } from './pays-description.component';

describe('PaysDescriptionComponent', () => {
  let component: PaysDescriptionComponent;
  let fixture: ComponentFixture<PaysDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
