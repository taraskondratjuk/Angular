import {Component, Input, OnInit} from '@angular/core';
import {Cars} from '../../../models/cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  cars: Cars;

  constructor() {
  }

  ngOnInit(): void {
  }

}


