import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarsComponent} from './components/all-cars-components/cars/cars.component';
import {CarComponent} from './components/all-cars-components/car/car.component';
import {FullCarComponent} from './components/all-cars-components/full-car/full-car.component';
import {RouterModule} from '@angular/router';
import {UserComponent} from './components/all-users-components/user/user.component';
import {UsersComponent} from './components/all-users-components/users/users.component';
import {FullUserComponent} from './components/all-users-components/full-user/full-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    FullCarComponent,
    UserComponent,
    UsersComponent,
    FullUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'cars', component: CarsComponent, children: [
          {path: ':id', component: FullCarComponent}]
      },
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':id', component: FullUserComponent}]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
