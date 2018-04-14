import { Component, OnInit, Input } from '@angular/core';
import { Town } from '../town';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  
  @Input() town: Town;
  
  constructor() { }

  ngOnInit() {
  }

}
