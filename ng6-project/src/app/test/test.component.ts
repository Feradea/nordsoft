import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<!--
  <p>
    Welcome {{ name }}
  </p>
  <p>{{ 2 + 2 }}</p>
  <p>{{ "Welcome" + name }}</p>
  <p>{{ "name: " + name + ", length: " + name.length }}</p>
  <p>{{ name.toUpperCase() + name.toLowerCase() }}</p>
  <p>{{ greetUser()}}</p>
  <p> a = 2+2 //ERR: Bindings cannot contain assignments </p>
  <p>window.location.href //read property 'location' of undefined</p>
  <p>{{ siteUrl }}</p>-->
  
  <h2>
    Welcome {{ name }}
  </h2>
  <input type="text" value="Andrea">
  <input type="text" [id] = "myId" value="Andrea">
  <input [disabled] = "isDisabled" type="text" id = "{{myId}}" value="Andrea">
  <input bind-disabled = "isDisabled" type="text" id = "{{myId}}" value="Andrea">`,
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {

  public name = "Andrea";
  public myId = "testId";
  public isDisabled = true;
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello" + this.name;
  }

}
