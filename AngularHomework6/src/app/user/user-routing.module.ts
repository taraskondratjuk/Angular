import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {FullUserComponent} from './components/full-user/full-user.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: ':id', component: FullUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
