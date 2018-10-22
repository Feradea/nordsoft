import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nord-filter-panel',
  templateUrl: './nord-filter-panel.component.html',
  styleUrls: ['./nord-filter-panel.component.css']
})
export class NordFilterPanelComponent implements OnInit {
  @Input() title: string;
  @Input() field_def:any[];

  panelOpenState = false; //add expansion panel state

  constructor() { }

  ngOnInit() {
  }

}
