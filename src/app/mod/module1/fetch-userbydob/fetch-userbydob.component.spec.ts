import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchUserbydobComponent } from './fetch-userbydob.component';

describe('FetchUserbydobComponent', () => {
  let component: FetchUserbydobComponent;
  let fixture: ComponentFixture<FetchUserbydobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchUserbydobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchUserbydobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
