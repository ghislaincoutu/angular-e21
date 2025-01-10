import { Component, ViewChild, ElementRef } from '@angular/core';
import { Module01Service } from '../module01.service';

@Component({
    selector: 'app-liste-sommaire',
    templateUrl: './liste-sommaire.component.html',
    styleUrls: ['./liste-sommaire.component.scss'],
    standalone: false
})
export class ListeSommaireComponent {
  @ViewChild('searchbar') searchbar = ElementRef;

  dataList01 = [] as any;
  dataList02 = [] as any;
  categoryName = [] as any;
  courseID = [] as any;
  searchText: string = '';

  constructor(private module01: Module01Service) {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.categoryName = this.module01.categoryName;
    this.courseID = this.module01.courseID;
    this.displayAllData();
    this.resetData();
  }

  public displayAllData() {
    this.module01.getData39().subscribe(response01 => {
      this.dataList01 = response01;
    });
  }

  public resetData() {
    this.module01.getData39().subscribe(response02 => {
      this.dataList02 = response02;
    });
  }

  public categoryModel: any;
  public selectCategory() {
    if (this.categoryModel != "all") {
      this.resetData();
      this.dataList01 = this.dataList02.filter((x: any) => x.category === this.categoryModel);
    } else {
      this.displayAllData();
    }
  }

  public courseModel: any;
  public selectCourse() {
    if (this.courseModel != "all") {
      this.resetData();
      var substring = this.dataList02.some((x: any) => x.course.includes(this.courseModel));
      if (substring == true) {
        this.dataList01 = this.dataList02.filter((x: any) => x.course.includes(this.courseModel));
      } else {
        this.dataList01 = [];
      }
    } else {
      this.displayAllData();
    }
  }

}