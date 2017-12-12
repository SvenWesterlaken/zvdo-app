import {Schedule} from './schedule';

export class Meeting {
  _id: string;
  private _title: string;
  private _date: Date;
  private _schedule: Schedule;
  private _events_pdf: string;
  private _results: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get schedule(): Schedule {
    return this._schedule;
  }

  set schedule(value: Schedule) {
    this._schedule = value;
  }

  get events_pdf(): string {
    return this._events_pdf;
  }

  set events_pdf(value: string) {
    this._events_pdf = value;
  }

  get results(): string {
    return this._results;
  }

  set results(value: string) {
    this._results = value;
  }
}
