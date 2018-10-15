import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  title = 'Angular Project';
  name = "Andrea";

  users = [
    {
      id: 1,
      name: 'Name 1',
      age: 33,
      occupation: 'team manager',
      address: 'Street 123',
      city: 'City 1',
      phone: '0123456789'
    },
    {
      id: 2,
      name: 'Name 2',
      age: 42,
      occupation: 'administrator',
      address: 'Baker Street 234',
      city: 'City 2',
      phone: '0123456789'
    },
    {
      id: 3,
      name: 'Name 3',
      age: 31,
      occupation: 'programmer',
      address: 'Street 345',
      city: 'City 1',
      phone: '0123456789'
    },
    {
      id: 4,
      name: 'Name 4',
      age: 24,
      occupation: 'developer',
      address: 'Street 456',
      city: 'City 3',
      phone: '0123456789'
    },
    {
      id: 5,
      name: 'Name 5',
      age: 23,
      occupation: 'developer',
      address: 'Street 567',
      city: 'City 4',
      phone: '0123456789'
    }
  ];

}
