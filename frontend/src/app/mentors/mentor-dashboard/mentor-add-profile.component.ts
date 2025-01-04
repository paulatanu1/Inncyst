import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogAddExperienceComponent } from './add-experience-dialog';

@Component({
  selector: 'mentor-add-profile',
  templateUrl: 'mentor-add-profile.html',
  styleUrls: ['./mentor-add-profile.scss'],
})
export class DialogMentorProfile {
  constructor(
    public dialogRef: MatDialogRef<DialogMentorProfile>,
    public dialog: MatDialog
  ) {}

  openExperienceDialog() {
    const experienceDialogRef = this.dialog.open(DialogAddExperienceComponent);

    experienceDialogRef.afterClosed().subscribe((result) => {
      console.log(`Experience dialog result: ${result}`);
      // You can use the result if needed or perform further actions
    });
  }
}
