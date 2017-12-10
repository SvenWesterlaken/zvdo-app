import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Meeting} from '../models/meeting';

@Injectable()
export class MeetingService {

  constructor(private http: HttpClient) {}

  getMeetings() {
    return this.http.get<Meeting[]>(`${environment.api.url}/meeting`);
  }

  getMeeting(id: String): Promise<void | Meeting> {
    return this.http.get<Meeting>(`${environment.api.url}/meeting/${id}`).toPromise().then((meeting: Meeting) => {
      return meeting;
    }).catch((err) => console.log(err));
  }

}
