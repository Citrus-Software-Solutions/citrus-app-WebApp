export type _Deadline = string

export class Deadline {
  private _date

  constructor(props: _Deadline) {
    this._date = props
    this.validate()
  }

  get _deadline() {
    return this._date
  }

  private validate() {
    if (new Date(this._date) <= new Date()) {
      throw new Error(
        'La fecha de la oferta de trabajo no puede ser menor a la fecha actual'
      )
    }
  }
}
