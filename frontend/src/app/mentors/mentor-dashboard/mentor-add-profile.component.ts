import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogAddExperienceComponent } from './add-experience-dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mentor-add-profile',
  templateUrl: 'mentor-add-profile.html',
  styleUrls: ['./mentor-add-profile.scss'],
})
export class DialogMentorProfile {
  //from section
  mentorForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogMentorProfile>,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  openExperienceDialog() {
    const experienceDialogRef = this.dialog.open(DialogAddExperienceComponent);

    experienceDialogRef.afterClosed().subscribe((result) => {
      console.log(`Experience dialog result: ${result}`);
      // You can use the result if needed or perform further actions
    });
  }

  ngOnInit(): void {
    this.mentorForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      profileHeading: ['', Validators.required],
      whatDoYouDo: ['', Validators.required],
      about: ['', [Validators.required, Validators.minLength(20)]],
      location: this.fb.group({
        country: ['', Validators.required],
        state: ['', Validators.required],
      }),
      languages: ['', Validators.required],
    });
  }

  // about mentor from submission

  onSubmit() {
    if (this.mentorForm.valid) {
      console.log('Form Data:', this.mentorForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
