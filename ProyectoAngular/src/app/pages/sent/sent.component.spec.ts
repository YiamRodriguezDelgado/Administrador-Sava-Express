import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from "@angular/core";
import { SentComponent } from './sent.component';
import {FormControl} from '@angular/forms';
import { Package } from 'src/app/models/package';
import { ClientsDataService } from 'src/app/service/clients-data.service';
import Swal from 'sweetalert2';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as exp from 'constants';
import { By } from '@angular/platform-browser';

describe('SentComponent', () => {
  let component: SentComponent;
  let fixture: ComponentFixture<SentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentComponent],
      imports: [HttpClientTestingModule],
      providers: [ClientsDataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should send error when the list is empty', () => {
    component.enviar();
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toBe("Seleccione al menos un paquete");
  });

  it("should send a right if there it's a list one package selected",()=>{
    component.selectedPackages.setValue('1234')
    component.enviar();
    expect(Swal.getTitle().textContent).toBe("Acabas de crear tu paquete Sava");
  })

  it("should been adding package to the package container",()=>{
    const numeroPrueba=123;
    fixture.detectChanges();
    const productSelectElement = fixture.debugElement.query(By.css('mat-select'));
    productSelectElement.triggerEventHandler('selectionChange',{ value:  [numeroPrueba] });
    expect(component.paquetesMostrar.length).toBe(1);
  })
});

