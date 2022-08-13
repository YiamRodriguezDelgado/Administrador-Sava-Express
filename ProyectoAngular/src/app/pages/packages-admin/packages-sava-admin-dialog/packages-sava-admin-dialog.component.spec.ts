import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesSavaAdminDialogComponent } from './packages-sava-admin-dialog.component';

describe('PackagesSavaAdminDialogComponent', () => {
  let component: PackagesSavaAdminDialogComponent;
  let fixture: ComponentFixture<PackagesSavaAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesSavaAdminDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesSavaAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
