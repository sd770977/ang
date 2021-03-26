import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchUserbydojComponent } from './fetch-userbydoj.component';

describe('FetchUserbydojComponent', () => {
  let component: FetchUserbydojComponent;
  let fixture: ComponentFixture<FetchUserbydojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchUserbydojComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchUserbydojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
