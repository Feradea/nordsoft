import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  panel_title: string = "Filter Panel";
  panel_title2: string = "My Second Panel";
  padding_size: string = "16px";

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
      value: "apple"
    },
    {
      caption: "Option 2",
      value: "banana"
    },
    {
      caption: "Option 3",
      value: "orange"
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
    caption: "Date 1",
    type: "date",
    value: "2018-10-19"
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
      caption: "Fruit 1",
      sub_value: "apple"
    },
    {
      caption: "Fruit 2",
      sub_value: "orange"
    },
    {
      caption: "Fruit 3",
      sub_value: "banana"
    }
    ],
    checked: "orange",
  },
  ];

}




