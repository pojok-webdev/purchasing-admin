import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetpasswordComponent } from './user-setpassword.component';

describe('UserSetpasswordComponent', () => {
  let component: UserSetpasswordComponent;
  let fixture: ComponentFixture<UserSetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
