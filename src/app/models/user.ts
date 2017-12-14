export class User {
  _id: string;
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _password: string;
  private _birth: Date;
  private _gender: string;
  private _image: string;
  private _description: string;
  private _is_coach: boolean;
  private _is_admin: boolean;
  private _swimranking_id: number;


  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get birth(): Date {
    return this._birth;
  }

  set birth(value: Date) {
    this._birth = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get is_coach(): boolean {
    return this._is_coach;
  }

  set is_coach(value: boolean) {
    this._is_coach = value;
  }

  get is_admin(): boolean {
    return this._is_admin;
  }

  set is_admin(value: boolean) {
    this._is_admin = value;
  }

  get swimranking_id(): number {
    return this._swimranking_id;
  }

  set swimranking_id(value: number) {
    this._swimranking_id = value;
  }
}
