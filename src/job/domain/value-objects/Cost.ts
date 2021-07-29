export type _Cost = number

export class Cost {
  private cost

  constructor(props: _Cost) {
    this.cost = props
  }

  get _value() {
    return this.cost
  }
}
