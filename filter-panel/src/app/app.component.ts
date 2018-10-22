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
    },
  ]



}
