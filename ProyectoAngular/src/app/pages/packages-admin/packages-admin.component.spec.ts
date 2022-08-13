import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackagesAdminDialogComponent } from './packages-admin-dialog/packages-admin-dialog.component';
import { PackagesAdminComponent } from './packages-admin.component';

describe('PackagesAdminComponent', () => {
  let component: PackagesAdminComponent;
  let fixture: ComponentFixture<PackagesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesAdminComponent,
      PackagesAdminDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
