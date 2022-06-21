import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersDialogComponent } from './admin-users-dialog.component';

describe('AdminUsersDialogComponent', () => {
  let component: AdminUsersDialogComponent;
  let fixture: ComponentFixture<AdminUsersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
