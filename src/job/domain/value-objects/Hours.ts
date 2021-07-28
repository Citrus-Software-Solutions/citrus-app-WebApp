export type _Hours = number

export class Hours {
  private hours
  constructor(props: _Hours) {
    //   validations
    this.hours = props
  }

  get _value() {
    return this.hours
  }
}
