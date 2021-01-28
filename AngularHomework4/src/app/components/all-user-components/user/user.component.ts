import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../models/user-models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  getUser(user: User): void {
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute,
      state: user
    });

  }

}
