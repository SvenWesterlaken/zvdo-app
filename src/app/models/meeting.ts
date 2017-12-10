import {Schedule} from './schedule';

export class Meeting {
  private _id: string;
  private title: string;
  private date: Date;
  private schedule: Schedule;
  private events_pdf: string;
  private results: string;
}
