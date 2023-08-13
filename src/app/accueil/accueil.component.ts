import { Component } from '@angular/core';
import { environment } from './../../environments/environment';
declare const playSound: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  envTitle = environment.envTitle;
  envURL = environment.envURL;
  envJSON = environment.envJSON;

  constructor() { }

  ngOnInit(): void {
  }

  callExternalJS(id: string, audioFile: string) {
    playSound(id, audioFile);
  }

}
