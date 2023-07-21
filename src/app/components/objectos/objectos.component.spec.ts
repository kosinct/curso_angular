import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectosComponent } from './objectos.component';

describe('ObjectosComponent', () => {
  let component: ObjectosComponent;
  let fixture: ComponentFixture<ObjectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
