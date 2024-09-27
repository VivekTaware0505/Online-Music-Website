import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglistComponent } from './englist.component';

describe('EnglistComponent', () => {
  let component: EnglistComponent;
  let fixture: ComponentFixture<EnglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
