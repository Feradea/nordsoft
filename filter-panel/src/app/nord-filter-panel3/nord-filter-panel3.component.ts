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
  @Input() padding_size: string;

  myString: FormControl;
  myNumber: FormControl;
  myDate: FormControl;
  myRadio: FormControl;

  panelOpenState = false; //add expansion panel state

  constructor() { }

  ngOnInit() {
    let group: any = {};

    this.field_def.forEach(i => {

      if (i.type === "string") {
        this.myString = new FormControl(i.value);

      } else if (i.type === "number") {
        this.myNumber = new FormControl(i.value);

      } else if (i.type === "date") {
        this.myDate = new FormControl(i.value);

      } else if (i.type === "radio") {
        this.myRadio = new FormControl(i.checked);
      }

    })

  }

}
