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
  selector: 'app-nord-filter-panel2',
  templateUrl: './nord-filter-panel2.component.html',
  styleUrls: ['./nord-filter-panel2.component.css']
})
export class NordFilterPanel2Component implements OnInit {
  @Input() title: string;
  @Input() field_def: any[];

  formgroup: FormGroup;
  items = [{
      name: 'Field1',
      type: 'text',
      value: 'Some text'
    },
    {
      name: 'Field2',
      type: 'number',
      value: 2
    },
    {
      name: 'Date1',
      type: 'date',
      value: '2018-10-26'
    },
    {
      name: "Options",
      type: "radio",
      value: [{
          caption: "Option 1",
          value: "1"
        },
        {
          caption: "Option 2",
          value: "2"
        },
        {
          caption: "Option 3",
          value: "3"
        }
      ]
    }
  ]

  onSubmit() {
    console.log(this.formgroup.value)
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // keszitek egy objektumot, amit kesobb felhasznalok arra, hogy FormGroup-ot epitsek belole
    let group: any = {};
    this.items.forEach(i => {
      group[i.name] = new FormControl(i.value)
    })
    this.formgroup = new FormGroup(group);
    console.log(group);
  }

}
