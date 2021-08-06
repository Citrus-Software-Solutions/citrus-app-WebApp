export type Zip = string
export interface _Location {
  city: string
  state: string
  street1: string
  street2?: string
  zip: Zip
}

export class Location {
  private city
  private state
  private street1
  private street2
  private zip

  constructor(props: _Location) {
    this.city = props.city
    this.state = props.state
    this.street1 = props.street1
    this.street2 = props.street1
    this.zip = props.zip
    this.validate()
  }

  public get _location() {
    return {
      city: this.city,
      state: this.state,
      street1: this.street1,
      street2: this.street2,
      zip: this.zip,
    }
  }

  public get _city() {
    return this.city
  }

  public get _state() {
    return this.state
  }

  public get _street1() {
    return this.street1
  }

  public get _street2() {
    return this.street2
  }

  public get _zip() {
    return this.zip
  }

  private validate() {
    if (
      this.city == undefined ||
      this.city == null ||
      this.city.length >= 100
    ) {
      throw new Error(
        'El pais no puede estar vacío ni exceder los 100 caracteres'
      )
    } else if (
      this.state == undefined ||
      this.state == null ||
      this.state.length >= 100
    ) {
      throw new Error(
        'El estado no puede estar vacío ni exceder los 100 caracteres'
      )
    } else if (
      this.street1 == undefined ||
      this.street1 == null ||
      this.street1.length >= 100
    ) {
      throw new Error(
        'La direccion no puede estar vacia ni exceder los 100 caracteres'
      )
    } else if (!this.zip || this.zip.length > 4) {
      throw new Error(
        'El codigo ZIP no puede estar vacío ni exceder los 4 caracteres'
      )
    }
  }
  //
  //  else {

  //   if (props.street2 == undefined || props.street2 == null) {
  //     this._street2 = null
  //   } else if (props.street2.length >= 50) {
  //     throw new Error(
  //       'El campo de direccion 2 no puede exceder los 50 caracteres'
  //     )
  //   } else {
  //     this._street2 = props.street2
  //   }
  // }
}
