import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nord-filter-panel',
  templateUrl: './nord-filter-panel.component.html',
  styleUrls: ['./nord-filter-panel.component.css']
})
export class NordFilterPanelComponent implements OnInit {
  panelOpenState = false; //add expansion panel state

  constructor() { }

  ngOnInit() {
  }

}
