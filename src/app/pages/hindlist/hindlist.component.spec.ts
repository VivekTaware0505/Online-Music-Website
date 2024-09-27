import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindlistComponent } from './hindlist.component';

describe('HindlistComponent', () => {
  let component: HindlistComponent;
  let fixture: ComponentFixture<HindlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
