import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { environment } from './../environments/environment';

export interface Data39 {
  comment: string;
  id: string;
  active: string;
  category: string;
  title: string;
  course: string;
  module: string;
  activity: string;
  keywords: string;
  htmlfile: string;
  document39?: any;
}

const data39: Data39[] = [];

@Injectable({
  providedIn: 'root'
})
export class Module01Service {
  envTitle = environment.envTitle;
  envURL = environment.envURL;
  envJSON = environment.envJSON;

  constructor(private http20: HttpClient) { }

  getData39(): Observable<Data39[]> {
    return this.http20.get<Data39[]>(this.envURL + "/json/" + this.envJSON).pipe(delay(500));
  }

  categoryName = [
    "Aide à la rédaction",
    "Français parlé au Québec",
    "Grammaire",
    "Phonétique",
    "Stratégie",
    "Verbes"
  ];

  courseID = [
    "B01",
    "B02",
    "B03",
    "B04",
    "B05",
    "B06",
    "ADA",
    "GSA",
    "SSI"
  ];

}
