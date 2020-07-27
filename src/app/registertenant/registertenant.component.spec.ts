import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertenantComponent } from './registertenant.component';

describe('RegistertenantComponent', () => {
  let component: RegistertenantComponent;
  let fixture: ComponentFixture<RegistertenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistertenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistertenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
