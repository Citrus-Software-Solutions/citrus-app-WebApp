export type _Title = string

export class Title {
  private title

  constructor(title: _Title) {
    this.title = title
    this.validate()
  }

  public get _title() {
    return this.title
  }

  private validate() {
    if (
      this.title === undefined ||
      this.title === null ||
      this.title.length > 100
    ) {
      throw new Error(
        'El titulo no debe estar vacío y debe tener un límite de 100 caracteres'
      )
    }
  }
}
