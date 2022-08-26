import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AdminDataService} from '../../../services/admin-data.service'
@Component({
  selector: 'app-admin-users-dialog',
  templateUrl: './admin-users-dialog.component.html',
  styleUrls: ['./admin-users-dialog.component.scss']
})
export class AdminUsersDialogComponent implements OnInit {
  checkoutForm!: FormGroup;
  constructor(private dialogRef: MatDialogRef<AdminUsersDialogComponent>,private formBuilder: FormBuilder,private _petitions: AdminDataService) { }

  ngOnInit(): void {
    this.checkoutForm=this.formBuilder.group({
      username: ['',Validators.required],
      role:['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required],
      password2:['',Validators.required],
    })
  }
  Guardar(form){
    if(this.checkoutForm.invalid){
      Swal.fire({
        text:"Llene todos los datos correctamente",
        icon:'error'
      })
      return
    }
    const formData=new FormData()
    formData.append('correo',form.username)
    formData.append('role',form.role)
    formData.append('password',form.password)
    formData.append('telefono',form.phone)
    if(form.password!=form.password2){
      Swal.fire({
        text:"Las contraseñas no coinciden",
        icon:'error'
      })
    }else{
      this._petitions.createUsers(formData).subscribe((message:any)=>{
        if(message.message=="Usuario ya registrado"){
          Swal.fire({
            text:message.message,
            icon:'error'
          })
          return
        }else{
          Swal.fire(
            "Usuarios",
            'Se ha creado satisfactoriamente el nuevo usuario',
            'success'
          ).then(function() {
            window.location.reload();
        });
        }
      })
    }
  }
}
