import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PackageComponent } from './package.component';
import { By } from '@angular/platform-browser';
import { Package } from '../../models/package';
export class MockNgbModalRef {
  componentInstance = {
      prompt: undefined,
      title: undefined
  };
  result: Promise<any> = new Promise((resolve, reject) => resolve(true));
}

describe('PackageComponent', () => {
  let component: PackageComponent;
  let fixture: ComponentFixture<PackageComponent>;
  let modalService: NgbModal;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageComponent);
    component = fixture.componentInstance;
    const paquete_Prueba :Package ={trackingNumber:124,foto:'../../../assets/img/icons/common/package.jpg',precio:90,peso:"../../../assets/img/icons/common/package.jpg",fechaLLegada:'Mañana'};
    component.package=paquete_Prueba;
    fixture.detectChanges();
    modalService = TestBed.get(NgbModal);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should open modal', () => {
    spyOn(modalService, 'open').and.returnValue(mockModalRef as any);
    const productSelectElement = fixture.debugElement.query(By.css('.image-details'));
    productSelectElement.triggerEventHandler("click",123);
    fixture.detectChanges();
    expect(modalService.open).toHaveBeenCalled();
  });

});
