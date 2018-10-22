import {Component, Inject} from '@angular/core';
import {XkoolUser} from '../../model/xkool-user.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: 'user-edit-dialog.component.html',
  styleUrls: ['user-edit-dialog.component.css']
})
export class UserEditDialogComponent {
  constructor(public dialogRef: MatDialogRef<UserEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: XkoolUser) {
  }
}
