import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousePosComponent } from './mouse-pos.component';

describe('MousePosComponent', () => {
  let component: MousePosComponent;
  let fixture: ComponentFixture<MousePosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MousePosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MousePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
