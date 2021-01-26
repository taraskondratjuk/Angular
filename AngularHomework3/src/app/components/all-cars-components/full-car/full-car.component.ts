import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {cars} from '../../../dataBase/cars';

@Component({
  selector: 'app-full-car',
  templateUrl: './full-car.component.html',
  styleUrls: ['./full-car.component.css']
})
export class FullCarComponent implements OnInit {

  cars = cars;
  findCarId: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.findCarId = value.id);
  }

}
