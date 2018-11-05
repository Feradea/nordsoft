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

  myString: FormControl;
  myNumber: FormControl;
  myDate: FormControl;
  myRadio: FormControl;

  radioButtonValue: string;

  panelOpenState = false; //add expansion panel state

  constructor() { }

  onChangeRadioButton(value) {
    this.radioButtonValue = value;
  }

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
        // this.myRadio = new FormControl(i.value);

        for (let y = 0; y < i.value.length; y++) {
          console.log("Caption: " + i.value[y].caption + ", Sub_Value: " + i.value[y].sub_value + ", Checked: " + i.value[y].checked);
          this.myRadio = new FormControl(i.value[y].sub_value);
        }

      }
      console.log(this.radioButtonValue);

    })

  }

}
