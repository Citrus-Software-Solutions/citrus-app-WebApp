import { Id } from '../value-objects/Identifier'
import { Employee } from './Employee'
import { JobOffer } from './JobOffer'

export interface _Application {
  id: Id
  date: Date
  employee: Employee
  jobOffer: JobOffer
  status: number
}

export class Application {
  constructor(props: _Application) {
    //   validations
    return props
  }
}
