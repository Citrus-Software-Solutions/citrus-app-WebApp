export type Zip = string
export interface _Location {
  country: string
  state: string
  street1: string
  street2?: string
  zip: Zip
}
export class Location {
  private _country: string
  private _state: string
  private _street1: string
  private _street2: string | null
  private _zip: Zip

  constructor(props: _Location) {
    if (
      props.country == undefined ||
      props.country == null ||
      props.country.length >= 20
    ) {
      throw new Error(
        'El pais no puede estar vacío ni exceder los 20 caracteres'
      )
    } else if (
      props.state == undefined ||
      props.state == null ||
      props.state.length >= 20
    ) {
      throw new Error(
        'El estado no puede estar vacío ni exceder los 20 caracteres'
      )
    } else if (
      props.street1 == undefined ||
      props.street1 == null ||
      props.street1.length >= 50
    ) {
      throw new Error(
        'La direccion no puede estar vacia ni exceder los 50 caracteres'
      )
    } else if (
      props.zip == undefined ||
      props.zip == null ||
      props.zip.length >= 10
    ) {
      throw new Error(
        'El codigo ZIP no puede estar vacío ni exceder los 10 caracteres'
      )
    } else {
      this._country = props.country
      this._state = props.state
      this._street1 = props.street1
      this._zip = props.zip

      if (props.street2 == undefined || props.street2 == null) {
        this._street2 = null
      } else if (props.street2.length >= 50) {
        throw new Error(
          'El campo de direccion 2 no puede exceder los 50 caracteres'
        )
      } else {
        this._street2 = props.street2
      }
    }
  }
}
