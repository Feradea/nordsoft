import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import {
  formGroupNameProvider, FormGroupName
} from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-nord-filter-panel2',
  templateUrl: './nord-filter-panel2.component.html',
  styleUrls: ['./nord-filter-panel2.component.css']
})
export class NordFilterPanel2Component implements OnInit {
  @Input() title: string;
  @Input() field_def: any[];

  formgroup: FormGroup;

  // items = [{
  //     caption: 'Field123',
  //     type: 'string',
  //     value: 'Some text'
  //   },
  //   {
  //     caption: 'Field2',
  //     type: 'number',
  //     value: 2
  //   },
  //   {
  //     caption: 'Date1',
  //     type: 'date',
  //     value: '2018-10-26'
  //   },
  //   {
  //     caption: "Options",
  //     type: "radio",
  //     value: [{
  //         caption: "Option a",
  //         value: "a"
  //       },
  //       {
  //         caption: "Option b",
  //         value: "b"
  //       },
  //       {
  //         caption: "Option c",
  //         value: "a"
  //       }
  //     ]
  //   }
  // ];

  onSubmit() {
    console.log(this.formgroup.value)
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // keszitek egy objektumot, amit kesobb felhasznalok arra, hogy FormGroup-ot epitsek belole

    let group: any = {};

    this.field_def.forEach(i => { // foreach statement

      if (Array.isArray(i.value)) {
        // group[i.caption] = new FormControl(i.value)
        // document.write(" isArray=:" + i.value); 

        // document.write(" isArray=:" + i.value.length);  //3
        // document.write(" isArray=:" + i.value[0].value); //apple

        for (let y = 0; y < i.value.length; y++) {
          document.write(i.value[y].caption);
          document.write(i.value[y].value);
        }

      } else {
        // const control = new FormControl('some value');
        group[i.caption] = new FormControl(i.value)
      }

    })

    this.formgroup = new FormGroup(group);
    console.log(group);
  }

}
