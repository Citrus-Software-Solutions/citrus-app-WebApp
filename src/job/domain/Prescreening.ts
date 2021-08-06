import { Id } from './value-objects/Identifier'
import { Employee } from './Employee'

export interface _Prescreening {
  id: Id //Added
  employee: Employee
  date: Date
  questions: string[] //max 5
  video: any
  status: number
}

export class Prescreening {
  constructor(props: _Prescreening) {
    //   validations
    return props
  }
}
