import { Id } from '../value-objects/Identifier'

export interface _Skill {
  id: Id
  name: string
  category: number //FIXME:
}

export class Skill {
  constructor(props: _Skill) {
    // Validations
    return props
  }
}
