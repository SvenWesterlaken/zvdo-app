export class Event {
  private _heat: number;
  private _stroke: string;
  private _gender: string;
  private _min_category: number;
  private _max_category: number;


  get heat(): number {
    return this._heat;
  }

  set heat(value: number) {
    this._heat = value;
  }

  get stroke(): string {
    return this._stroke;
  }

  set stroke(value: string) {
    this._stroke = value;
  }

  get gender(): string {
    return this._gender === 'Male' ? 'M' : 'F';
  }

  set gender(value: string) {
    this._gender = value;
  }

  get min_category(): number {
    return this._min_category;
  }

  set min_category(value: number) {
    this._min_category = value;
  }

  get max_category(): number {
    return this._max_category;
  }

  set max_category(value: number) {
    this._max_category = value;
  }
}
