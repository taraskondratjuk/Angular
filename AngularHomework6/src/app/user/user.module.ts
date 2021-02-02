import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {FullUserComponent} from './components/full-user/full-user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';


@NgModule({
  declarations: [UserComponent, UsersComponent, FullUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [HttpClientModule],
  providers: [UserService]
})
export class UserModule {
}
