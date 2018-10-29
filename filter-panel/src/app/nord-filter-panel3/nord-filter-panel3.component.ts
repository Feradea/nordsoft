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

  control = new FormControl('some value');

  string = new FormControl('And');
  number = new FormControl('123');
  date = new FormControl('2018-10-29');
  radio = new FormControl('asd');

  panelOpenState = false; //add expansion panel state

  constructor() {}

  ngOnInit() {
    let group: any = {};
    // objektum letrehozasa
    
    this.field_def.forEach(i => {

      document.write(i.caption);
      // document.write(i.type);
      // document.write(i.value);

      if (i.type === "string") {
        //document.write("string");
        //group[i.caption] = new FormControl(i.value); 

        this.string.setValue(i.value);
        
      } else if (i.type === "number") {
        //document.write("number");
        //group[i.caption] = new FormControl(i.value); 
 
        this.number.setValue(i.value);

      } else if (i.type === "date") {
        ///document.write("date");
        //group[i.caption] = new FormControl(i.value); 
        this.date.setValue(i.value);

      } else if (i.type === "radio") {
        //document.write("radio");
        //group[i.caption] = new FormControl(i.value); 
        this.radio.setValue(i.value);
        
      }
      // console.log(group);
    })
  }

}
