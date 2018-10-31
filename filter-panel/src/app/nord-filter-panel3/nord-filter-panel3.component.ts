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
        //group[i.caption] = new FormControl(i.value); 
        //this.myString.setValue(i.value);

        this.myString = new FormControl(i.value);

      } else if (i.type === "number") {
        //group[i.caption] = new FormControl(i.value); 
        //this.myNumber.setValue(i.value);
        this.myNumber = new FormControl(i.value);

      } else if (i.type === "date") {
        //group[i.caption] = new FormControl(i.value); 
        //this.myDate.setValue(i.value);
        this.myDate = new FormControl(i.value);

      } else if (i.type === "radio") {
        //group[i.caption] = new FormControl(i.value); 
        //this.myRadio.setValue(i.value);
        this.myRadio = new FormControl(i.value);

        console.log("radio button value: " + i.value);
      }
      // console.log(group);

    })
  }

}
