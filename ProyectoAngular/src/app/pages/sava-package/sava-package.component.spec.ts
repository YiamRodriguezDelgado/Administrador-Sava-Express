import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavaPackageComponent } from './sava-package.component';

describe('SavaPackageComponent', () => {
  let component: SavaPackageComponent;
  let fixture: ComponentFixture<SavaPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavaPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavaPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
