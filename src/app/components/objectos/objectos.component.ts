import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objectos',
  templateUrl: './objectos.component.html',
  styleUrls: ['./objectos.component.css']
})
export class ObjectosComponent implements OnInit {

  @Input() nombre = 'Anthony';

  constructor() { }

  ngOnInit(): void {
  }

}
