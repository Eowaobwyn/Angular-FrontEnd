import { Component, OnInit } from '@angular/core';
import { Town } from '../town';
import { MeteoTownService } from '../meteotown.service';

@Component({
  selector: 'app-liste-town',
  templateUrl: './liste-town.component.html',
  styleUrls: ['./liste-town.component.css'],
  providers: [MeteoTownService]
})
export class ListeTownComponent implements OnInit {

  towns: Town[] = [];
  constructor(private meteoTownService: MeteoTownService) { }

  ngOnInit() {
      this.meteoTownService.GetAllTowns().subscribe(town => this.towns = town);
  }

}
