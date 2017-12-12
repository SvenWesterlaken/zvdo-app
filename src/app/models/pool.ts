import {Address} from './address';

export class Pool {
  _id: string;
  private _name: string;
  private _address: Address;
  private _lane_count: number;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  get lane_count(): number {
    return this._lane_count;
  }

  set lane_count(value: number) {
    this._lane_count = value;
  }
}
