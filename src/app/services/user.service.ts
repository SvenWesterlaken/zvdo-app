import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  get(): Promise<void | User> {
    return this.http.get<User>(`${environment.api.url}/user`).toPromise().then(user => {
      return user;
    }).catch(err => console.log(err));
  }

  update(user): Observable<any> {
    return this.http.put(`${environment.api.url}/user`, user);
  }

}
