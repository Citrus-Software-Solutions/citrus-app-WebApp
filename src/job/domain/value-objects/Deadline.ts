export type _Deadline = Date

export class Deadline {
  private _date

  constructor(props: _Deadline) {
    this._date = props
  }

  public validateDate(date: Date): Date {
    const dateNow = new Date()
    if (date <= dateNow) {
      throw new Error(
        'La fecha de la oferta de trabajo no puede ser menor a la fecha actual'
      )
    }
    return date
  }
}
