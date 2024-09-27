import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarlistComponent } from './marlist.component';

describe('MarlistComponent', () => {
  let component: MarlistComponent;
  let fixture: ComponentFixture<MarlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
