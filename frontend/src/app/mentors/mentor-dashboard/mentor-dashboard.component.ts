import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMentorProfile } from './mentor-add-profile.component';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.scss'],
})
export class MentorDashboardComponent implements OnInit {
  spinnerColor: string = 'white'; // Default color
  spinnerSize: number = 20; // Default size

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Previous' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Current' },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartLabels = [['Approached'], ['Guided / Guiding']];
  public pieChartDatasets = [
    {
      data: [300, 500],
    },
  ];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  white: any;

  constructor(public dialog: MatDialog) {}

  openDialogAddMentor() {
    const dialogRef = this.dialog.open(DialogMentorProfile);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`); // Logs 'Experience added' when dialog closes
    });
  }

  ngOnInit(): void {}
}
