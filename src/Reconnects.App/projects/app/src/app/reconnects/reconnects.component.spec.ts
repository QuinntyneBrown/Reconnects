import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconnectsComponent } from './reconnects.component';

describe('ReconnectsComponent', () => {
  let component: ReconnectsComponent;
  let fixture: ComponentFixture<ReconnectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReconnectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconnectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
