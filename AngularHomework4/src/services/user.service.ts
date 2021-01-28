import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user-models/user';
import {BASE_URL} from '../settings/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  gelAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(BASE_URL + '/users');
  }
}
