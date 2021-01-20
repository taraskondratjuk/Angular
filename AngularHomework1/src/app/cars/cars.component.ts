import {Component} from '@angular/core';
import {cars} from '../../data-base/carsDataBase';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carsArr = cars;
}
