import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module01Service, Data39 } from '../module01.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-liste-detaillee',
  templateUrl: './liste-detaillee.component.html',
  styleUrls: ['./liste-detaillee.component.scss']
})
export class ListeDetailleeComponent {
  @ViewChild('searchbar') searchbar = ElementRef;

  envTitle = environment.envTitle;
  envURL = environment.envURL;
  envJSON = environment.envJSON;

  dataList01!: Data39[];
  dataList02!: Data39[];
  categoryName = [] as any;
  courseID = [] as any;
  searchText: string = '';

  constructor(
    public http39: HttpClient,
    private module01: Module01Service) {
    this.searchText = '';
  }

  private getHTMLFile(document85: string) {
    return this.http39.get(this.envURL + document85, { responseType: 'text' });
  }

  ngOnInit(): void {
    this.categoryName = this.module01.categoryName;
    this.courseID = this.module01.courseID;
    this.displayAllData();
    this.resetData();
  }

  public displayAllData() {
    this.module01.getData39().subscribe((response01: Data39[]) => {
      response01.forEach(
        (item: Data39) => (item['document39'] = this.getHTMLFile(item.htmlfile))
      );
      this.dataList01 = response01;
    });
  }

  public resetData() {
    this.module01.getData39().subscribe((response02: Data39[]) => {
      response02.forEach(
        (item: Data39) => (item['document39'] = this.getHTMLFile(item.htmlfile))
      );
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
