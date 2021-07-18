import { Id } from './value-objects/Identifier'
export interface _Location {
  id: Id
  name: string
  type: string
}

export class Location {
  private _id
  private _name
  private _type

  constructor(props: _Location) {
    //   validations
    this._id = props.id
    this._name = props.name
    this._type = props.type
  }
}
