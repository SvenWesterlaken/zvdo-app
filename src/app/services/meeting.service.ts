import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Meeting} from '../models/meeting';
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MeetingService implements ApiService {

  constructor(private http: HttpClient) {}

  getArray(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${environment.api.url}/meeting`);
  }

  get(id: String): Promise<void | Meeting> {
    return this.http.get<Meeting>(`${environment.api.url}/meeting/${id}`).toPromise().then((meeting: Meeting) => {
      return meeting;
    }).catch((err) => console.log(err));
  }

  create(meeting): Observable<any> {
    return this.http.post(`${environment.api.url}/meeting`, meeting);
  }

  update(meeting): Observable<any> {
    return this.http.put(`${environment.api.url}/meeting`, meeting);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${environment.api.url}/meeting/${id}`);
  }

}
