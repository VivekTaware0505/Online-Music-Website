import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathisongComponent } from './marathisong.component';

describe('MarathisongComponent', () => {
  let component: MarathisongComponent;
  let fixture: ComponentFixture<MarathisongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarathisongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarathisongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
