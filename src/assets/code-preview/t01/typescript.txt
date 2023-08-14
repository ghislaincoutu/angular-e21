import { Component, OnInit } from '@angular/core';
import { Module02Service } from '../module02.service';

@Component({
  selector: 'app-t01',
  templateUrl: './t01.component.html',
  styleUrls: ['./t01.component.scss'],
  providers: [Module02Service]
})
export class T01Component {
  data39 = [] as any;
  categoryName = [] as any;
  courseID = [] as any;
  filterTerm: string = '';

  constructor(private module02: Module02Service) { 
    this.filterTerm = '';
  }

  ngOnInit(): void {
    this.categoryName = this.module02.categoryName;
    this.courseID = this.module02.courseID;

    this.data39 = this.module02.data39;
    console.log(this.data39);
  }

  public categoryModel: any;
  public selectCategory() {
    if (this.categoryModel != "all") {
      console.log(this.categoryModel);
    } else {
      console.log("all");
    }
  }

  public courseModel: any;
  public selectCourse() {
    if (this.courseModel != "all") {
      console.log(this.courseModel);
    } else {
      console.log("all");
    }
  }

}
