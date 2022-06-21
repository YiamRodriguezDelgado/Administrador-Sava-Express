import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPackagesDialogComponent } from './admin-packages-dialog.component';

describe('AdminPackagesDialogComponent', () => {
  let component: AdminPackagesDialogComponent;
  let fixture: ComponentFixture<AdminPackagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPackagesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPackagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
