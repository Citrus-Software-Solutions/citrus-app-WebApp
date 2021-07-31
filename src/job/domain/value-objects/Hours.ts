export type _Hours = number

export class Hours {
  private hours

  constructor(props: _Hours) {
    //   validations
    this.hours = props
    this.validate()
  }

  get _value() {
    return this.hours
  }

  private validate() {
    if (this.hours <= 0) {
      throw new Error('Total de horas inválido')
    }
  }
}
