import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pool} from '../models/pool';
import {environment} from '../../environments/environment';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PoolService implements ApiService {

  constructor(private http: HttpClient) {}

  getArray(): Observable<Pool[]> {
    return this.http.get<Pool[]>(`${environment.api.url}/pool`);
  }

  get(id: String): Promise<void | Pool> {
    return this.http.get<Pool>(`${environment.api.url}/pool/${id}`).toPromise().then(pool => {
      return pool;
    }).catch((err) => console.log(err));
  }

  create(pool): Observable<any> {
    return this.http.post(`${environment.api.url}/pool`, pool);
  }

  update(pool): Observable<any> {
    return this.http.put(`${environment.api.url}/pool`, pool);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${environment.api.url}/pool/${id}`);
  }


}
