export type _Title = string

export class Title {
  constructor(title: _Title) {
    if (title == undefined || title == null || title.length > 20) {
      throw new Error(
        'El titulo no debe estar vacío y debe tener un límite de 20 caracteres'
      )
    }
  }
}
