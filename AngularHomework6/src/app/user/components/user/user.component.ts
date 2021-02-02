import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../model/IUser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getUser(user: IUser): void {
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute,
      state: user
    });
  }

}
