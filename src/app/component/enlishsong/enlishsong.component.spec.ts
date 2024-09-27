import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlishsongComponent } from './enlishsong.component';

describe('EnlishsongComponent', () => {
  let component: EnlishsongComponent;
  let fixture: ComponentFixture<EnlishsongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlishsongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlishsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
