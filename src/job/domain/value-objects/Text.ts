export type _Text = string

export class Text {
  private text

  constructor(text: _Text) {
    this.text = text
    this.validate
  }

  get _value() {
    return this.text
  }

  private validate() {
    if (
      this.text === undefined ||
      this.text === null ||
      this.text.length >= 15
    ) {
      throw new Error(
        'El texto no puede estar vacío ni exceder los 15 caracteres!'
      )
    }
  }
}
