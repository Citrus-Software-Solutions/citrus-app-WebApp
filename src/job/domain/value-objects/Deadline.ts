export type _Deadline = string

export class Deadline {
  private _date

  constructor(props: _Deadline) {
    this._date = props
  }

  get _deadline() {
    return this._date
  }
}
