export type _Id = string

export class Id {
  private id

  constructor(props: _Id) {
    this.id = props
  }

  public get _id() {
    return this.id
  }
}
