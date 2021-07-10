import { Employee } from './Employee'
import { Application } from './Application'
import { Employer } from './Employer'
import { Id } from '../value-objects/Identifier'

export interface _Review {
  id: Id //Added
  questions: string //son 5
  scores: number //FIXME:
  totalScore: number
  employee: Employee
  application: Application
  employer: Employer
}

export class Review {
  constructor(props: _Review) {
    //   validations
    return props
  }
}
