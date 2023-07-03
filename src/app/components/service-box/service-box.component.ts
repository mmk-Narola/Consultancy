import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css'],
})
export class ServiceBoxComponent implements OnInit {
  @Input() serviseArray: any;

  constructor() {}
  ngOnInit(): void {}
}
