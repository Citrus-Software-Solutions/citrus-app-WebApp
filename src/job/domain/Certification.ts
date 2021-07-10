import { Id } from './value-objects/Identifier'
import { Course } from './Course'

export interface _Certification {
  id: Id
  name: string
  course: Course
  dateOfCompletion: Date
}

export class Certification {
  constructor(props: _Certification) {
    //   validations
    return props
  }
}
