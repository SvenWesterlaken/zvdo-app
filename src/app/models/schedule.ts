import { Event } from './event';

export class Schedule {
  private _events: Event[];


  get events(): Event[] {
    return this._events;
  }

  set events(value: Event[]) {
    this._events = value;
  }
}
