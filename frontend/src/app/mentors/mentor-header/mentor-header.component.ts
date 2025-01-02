import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-header',
  templateUrl: './mentor-header.component.html',
  styleUrls: ['./mentor-header.component.scss'],
})
export class MentorHeaderComponent implements OnInit {
  isMenuVisible = false; // Property to control menu visibility

  constructor() {}

  ngOnInit(): void {}

  // Method to show the menu
  showMenu(): void {
    this.isMenuVisible = true;
  }

  // Method to hide the menu
  hideMenu(): void {
    this.isMenuVisible = false;
  }
}
