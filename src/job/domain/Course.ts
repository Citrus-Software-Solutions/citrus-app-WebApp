import { Id } from './value-objects/Identifier'
import { Skill } from './Skill'

export interface _Course {
  id: Id
  code: string
  title: string
  coverImage: string
  skills: Skill[]
  status: number //FIXME:
}

export class Course {
  constructor(props: _Course) {
    //   validations
    return props
  }
}
