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

  myString: FormControl;
  myNumber: FormControl;
  myDate: FormControl;
  myRadio: FormControl;


  //date = new FormControl('2018-10-29');
  //nem kell inicializalni, eleg definialni a tipust

  //ilyen esetben ezt hasznaljuk:
  //this.myString.setValue(i.value);

  panelOpenState = false; //add expansion panel state
 

  constructor() {}

  ngOnInit() {
    let group: any = {};
    // objektum letrehozasa

    this.field_def.forEach(i => {

      // document.write(i.caption);
      // document.write(i.type);
      // document.write(i.value);

      // document.write() -t nem hasznalunk !!!!!!

      if (i.type === "string") {
        this.myString = new FormControl(i.value);

      } else if (i.type === "number") {
        this.myNumber = new FormControl(i.value);

      } else if (i.type === "date") {
        this.myDate = new FormControl(i.value);

      } else if (i.type === "radio") {
        this.myRadio = new FormControl(i.value);

        for (let y = 0; y < i.value.length; y++) {
          console.log("Caption: " + i.value[y].caption + ", Sub_Value: " + i.value[y].sub_value + ", Checked: " + i.value[y].checked);
        }

      }
      // console.log(group);

    })
  }

}
