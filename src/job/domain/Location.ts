import { Id } from './value-objects/Identifier'

export interface _Location {
  id: Id
  name: string
  type: string
}

export class Location {
  constructor(props: _Location) {
    //   validations
    return props
  }
}
