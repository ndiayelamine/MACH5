import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertiComponent } from './concerti.component';

describe('ConcertiComponent', () => {
  let component: ConcertiComponent;
  let fixture: ComponentFixture<ConcertiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
