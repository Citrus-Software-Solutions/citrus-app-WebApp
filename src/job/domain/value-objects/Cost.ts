export type _Cost = number

export class Cost {
  private cost

  constructor(props: _Cost) {
    this.cost = props
    this.validate()
  }

  get _value() {
    return this.cost
  }

  private validate() {
    if (this.cost <= 0) {
      throw new Error('Monto incorrecto')
    }
  }
}
