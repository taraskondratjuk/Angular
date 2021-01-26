import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {users} from '../../../dataBase/users';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  users = users;

  userId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.userId = value.id);
  }

  ngOnInit(): void {

  }

}
