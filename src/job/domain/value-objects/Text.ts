export type _Text = string

export class Text {
  constructor(text: _Text) {
    if (text == undefined || text == null || text.length >= 15) {
      throw new Error(
        'El texto no puede estar vacío ni exceder los 15 caracteres!'
      )
    }
  }
}
