import {Observable} from 'rxjs/Observable';

export interface ApiService {
  getArray(): Observable<any>;
  get(id: string): Promise<void | any>;
  create(object: JSON): Observable<any>;
  update(object: JSON): Observable<any>;
  remove(id: string): Observable<any>;
}
