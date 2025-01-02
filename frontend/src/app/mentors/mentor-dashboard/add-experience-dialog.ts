import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-experience-dialog',
  templateUrl: 'add-experience-dialog.html',
  styleUrls: ['./add-experience-dialog.scss'],
})
export class DialogAddExperienceComponent {
  constructor(public dialogRef: MatDialogRef<DialogAddExperienceComponent>) {}

  saveExperience() {
    // Add your logic for saving the experience
    console.log('New experience added!');

    // Optionally, pass some data back to the parent dialog when the experience is saved
    this.dialogRef.close('Experience saved');
  }
}
