import { Component, ViewChild, ElementRef } from '@angular/core';
import { Module03Service } from '../module03.service';

@Component({
    selector: 'app-t02',
    templateUrl: './t02.component.html',
    styleUrls: ['./t02.component.scss'],
    providers: [Module03Service],
    standalone: false
})
export class T02Component {
  @ViewChild('searchbar') searchbar = ElementRef;

  data39 = [] as any;
  categoryName = [] as any;
  courseID = [] as any;
  searchText: string = '';

  constructor(private module03: Module03Service) {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.categoryName = this.module03.categoryName;
    this.courseID = this.module03.courseID;

    this.data39 = this.module03.data39;
    console.log(this.data39);
  }

  public categoryModel: any;
  public selectCategory() {
    if (this.categoryModel != "all") {
      this.data39 = this.module03.data39.filter(
        item => item.category === this.categoryModel
      );
    } else {
      this.categoryModel = { id: -1 };
      this.data39 = this.module03.data39;
    }
  }

  public courseModel: any;
  public selectCourse() {
    if (this.courseModel != "all") {
      this.data39 = this.module03.data39.filter(
        item => item.course === this.courseModel
      );
    } else {
      this.courseModel = { id: -1 };
      this.data39 = this.module03.data39;
    }
  }
}
