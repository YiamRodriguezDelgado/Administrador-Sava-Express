import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesAdminDialogComponent } from './packages-admin-dialog.component';

describe('PackagesAdminDialogComponent', () => {
  let component: PackagesAdminDialogComponent;
  let fixture: ComponentFixture<PackagesAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesAdminDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
