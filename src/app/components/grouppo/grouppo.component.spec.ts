import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouppoComponent } from './grouppo.component';

describe('GrouppoComponent', () => {
  let component: GrouppoComponent;
  let fixture: ComponentFixture<GrouppoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouppoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
