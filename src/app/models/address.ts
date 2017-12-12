export class Address {
  private _street: string;
  private _number: number;
  private _suffix: string;
  private _postal_code: string;
  private _city: string;
  private _country: string;


  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  get suffix(): string {
    return this._suffix;
  }

  set suffix(value: string) {
    this._suffix = value;
  }

  get postal_code(): string {
    return this._postal_code;
  }

  set postal_code(value: string) {
    this._postal_code = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
}
