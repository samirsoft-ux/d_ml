import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLawyerNavigationComponent } from './my-lawyer-navigation.component';

describe('MyLawyerNavigationComponent', () => {
  let component: MyLawyerNavigationComponent;
  let fixture: ComponentFixture<MyLawyerNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLawyerNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLawyerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
