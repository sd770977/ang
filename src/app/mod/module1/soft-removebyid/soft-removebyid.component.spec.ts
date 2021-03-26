import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftRemovebyidComponent } from './soft-removebyid.component';

describe('SoftRemovebyidComponent', () => {
  let component: SoftRemovebyidComponent;
  let fixture: ComponentFixture<SoftRemovebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftRemovebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftRemovebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
