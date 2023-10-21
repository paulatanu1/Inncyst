import { Component, OnInit } from '@angular/core';
interface Ifield {
  title: string;
  description: string;
  id: any;
  pdf: {};
  image: [];
  video: [];
  url: [];
}
@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.scss'],
})
export class ProtfolioComponent implements OnInit {
  protfolioVissable: boolean = false;

  // fieldObj: Ifield
  field: Ifield[] = [];
  id = 0;
  // constructor() {}
  addProtfolio() {
    this.protfolioVissable = !this.protfolioVissable;
    // this.addField();
  }
  ngOnInit(): void {
    console.log(this.field, 'this');
    const currentTime = new Date().getTime();

    this.field.push({
      title: '',
      description: '',
      id: currentTime,

      pdf: {},
      image: [],
      video: [],
      url: [],
    });
    console.log(this.field);
  }

  addField() {
    const currentTime = new Date().getTime();
    this.field.push({
      title: '',
      description: '',
      id: currentTime,

      pdf: {},
      image: [],
      video: [],
      url: [],
    });
  }
  getObj(e: any) {
    console.log(this.field, 'f');
  }

  deletedObjId(e: any) {
    const formIndex = this.field.findIndex((data) => data.id === e);

    if (formIndex !== -1) {
      this.field.splice(formIndex, 1);

      console.log(this.field);
    }
  }
}
