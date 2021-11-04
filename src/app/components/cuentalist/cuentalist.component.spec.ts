import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentalistComponent } from './cuentalist.component';

describe('CuentalistComponent', () => {
  let component: CuentalistComponent;
  let fixture: ComponentFixture<CuentalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
