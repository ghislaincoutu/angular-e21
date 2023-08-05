import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Module02Service {
  envTitle = environment.envTitle;
  envURL = environment.envURL;
  envJSON = environment.envJSON;

  constructor(private http20: HttpClient) { }

  data39 = this.http20.get(this.envURL + "/json/" + this.envJSON);

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
