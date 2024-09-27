import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindisongComponent } from './hindisong.component';

describe('HindisongComponent', () => {
  let component: HindisongComponent;
  let fixture: ComponentFixture<HindisongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindisongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindisongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
