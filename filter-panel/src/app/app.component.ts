import {
  Component
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  panel_title: string = "Filter Panel";
  panel_title2: string = "My Second Panel";
  panel_title3: string = "My Third Panel for testing";

  field_def = [{
      caption: "Field 1",
      type: "number",
      value: "15"
    },
    {
      caption: "Date 1",
      type: "date",
      value: "2018-10-17"
    },
    {
      caption: "Field 2",
      type: "string",
      value: "Predefined string"
    },
    {
      caption: "Options",
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
  ];

  field_def2 = [{
      caption: "Field A",
      type: "number",
      value: "1523"
    },
    {
      caption: "Field B",
      type: "string",
      value: "Another string"
    }
  ];

  field_def3 = [{
    caption: "Field 123",
    type: "number",
    value: "159"
  },
  {
    caption: "Field Abc",
    type: "string",
    value: "Some text"
  },
  {
    caption: "Options",
    type: "radio",
    value: [{
        caption: "Option a",
        value: "apple"
      },
      {
        caption: "Option b",
        value: "orange"
      },
      {
        caption: "Option c",
        value: "banana"
      }
    ]
  },
];

}
