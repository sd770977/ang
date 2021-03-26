import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchUserbyidComponent } from './fetch-userbyid.component';

describe('FetchUserbyidComponent', () => {
  let component: FetchUserbyidComponent;
  let fixture: ComponentFixture<FetchUserbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchUserbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchUserbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
