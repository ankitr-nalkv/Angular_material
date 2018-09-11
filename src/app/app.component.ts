import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-bootstrap-example';
  interests = [];

  ngOnInit(){
    this.interests = [
      {value:'readding', viewValue:'Reading'},
      {value:'swimming', viewValue:'Swimming'},
      {value:'cycling', viewValue:'Cycling'},
    ];
  }
}
