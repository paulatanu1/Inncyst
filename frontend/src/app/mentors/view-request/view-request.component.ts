import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  message: string;
  subject: string;
  payStatus: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    subject: 'Helping Advanced JS',
    message:
      'Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.',
    payStatus: 'Success',
    action: 'H',
  },
  {
    subject: 'Helping Advanced JS',
    message:
      'Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.',
    payStatus: 'In Progress',
    action: 'H',
  },
  {
    subject: 'Helping Advanced JS',
    message:
      'Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.',
    payStatus: 'Success',
    action: 'H',
  },
  {
    subject: 'Helping Advanced JS',
    message:
      'Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.',
    payStatus: 'Failure',
    action: 'H',
  },
  {
    subject: 'Helping Advanced JS',
    message:
      'Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.',
    payStatus: 'Success',
    action: 'H',
  },
  {
    subject: 'Helping Advanced JS',
    message:
      'Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.',
    payStatus: 'In Progress',
    action: 'H',
  },
  {
    subject: 'Helping Advanced JS',
    message:
      'Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.',
    payStatus: 'Success',
    action: 'H',
  },
];

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss'],
})
export class ViewRequestComponent implements OnInit {
  displayedColumns: string[] = ['subject', 'message', 'payStatus', 'action']; // Columns to display in the table
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}

  getStatusClass(status: string): string {
    switch (status) {
      case 'Success':
        return 'success status-label';
      case 'Failure':
        return 'failure status-label';
      case 'In Progress':
        return 'in-progress status-label';
      default:
        return 'status-label';
    }
  }
}
