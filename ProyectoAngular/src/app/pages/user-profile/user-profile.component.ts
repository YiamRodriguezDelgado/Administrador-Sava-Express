import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminUsersDialogComponent } from './admin-users-dialog/admin-users-dialog.component';
import { AdminDataService } from 'src/app/services/admin-data.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/users';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  users: Array<User>=[]
  public focus;
  constructor(public dialog: MatDialog,private _petitions: AdminDataService) { }

  ngOnInit() {
    this.searchAllUsers()

  }
  searchAllUsers(){
    this._petitions.searchUsers().subscribe(users=>{
      this.users=users
    })
  }
  searchUser(email:string){
    if(email=""){
      this.searchAllUsers()
    }else{
      this._petitions.searchUser(email).subscribe(user=>{
        this.users=user
      })
    }
  }

  openAdminUsersDialog(): void {
    const modalRef = this.dialog.open(AdminUsersDialogComponent,{
        width: '50vw', //sets width of dialog
        height:'80vh', //sets width of dialog
        maxHeight: '100vh', //overrides default height of dialog
    });
  }

  deleteUser(user:any):void{
    Swal.fire({
      title: 'Seguro que deseas eliminar este usuario?',
      text: "No podras revertirlo una vez que se haya eliminado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,deseo eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this._petitions.deleteUsers(user).subscribe(message=>{
          Swal.fire(
            "Exito",
            'Se ha eliminado exitosamente el usuario',
            'success'
          ).then(function() {
            window.location.reload();
        });
        })
      }
    })
  }

}
