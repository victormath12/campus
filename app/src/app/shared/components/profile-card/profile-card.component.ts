import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input('name') name;

  @Input('label') label;

  @Input('image') image;

  @Input('background') background;

  constructor() { }

  ngOnInit() { }

}
