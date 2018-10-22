import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {XkoolUser} from '../../model/xkool-user.model';
import {MatDialog} from '@angular/material';
import {UserEditDialogComponent} from './user-edit-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users;
  checked = false;
  sideOpen = false;

  constructor(private userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  onEditTriggered(user) {
    console.log("open eidt");
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  onDeleteTriggered(user) {
    const i = this.users.indexOf(user);
    this.userService.deleteUser(user.id).subscribe(_ => {
      this.users = [
        ...this.users.slice(0, i),
        ...this.users.slice(i + 1)
      ];
    });
  }

  onSideTriggered() {
    this.sideOpen = !this.sideOpen;
  }
}

