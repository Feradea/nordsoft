import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-nord-filter-panel3',
  templateUrl: './nord-filter-panel3.component.html',
  styleUrls: ['./nord-filter-panel3.component.css']
})
export class NordFilterPanel3Component implements OnInit {
  @Input() title: string;
  @Input() field_def: any[];

  panelOpenState = false; //add expansion panel state

  constructor() {}

  ngOnInit() {
     let group: any = {};

    this.field_def.forEach(i => {

      document.write(i.caption);
      // document.write(i.type);
      // document.write(i.value);

      if (i.type === "string") {
        //document.write("string");

        group[i.caption] = new FormControl(i.value); 
        
      } else if (i.type === "number") {
        //document.write("number");
        group[i.caption] = new FormControl(i.value); 

      } else if (i.type === "date") {
        ///document.write("date");
        group[i.caption] = new FormControl(i.value); 

      } else if (i.type === "radio") {
        //document.write("radio");
        group[i.caption] = new FormControl(i.value); 
        
      }

      console.log(group);
    })
  }

}
