import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardRemovebyidComponent } from './hard-removebyid.component';

describe('HardRemovebyidComponent', () => {
  let component: HardRemovebyidComponent;
  let fixture: ComponentFixture<HardRemovebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardRemovebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardRemovebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
