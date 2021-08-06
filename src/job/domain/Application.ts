import { Id } from './value-objects/Identifier'
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
  private id
  private date
  private employee
  private jobOffer
  private status

  constructor(props: _Application) {
    this.id = props.id
    this.date = props.date
    this.employee = props.employee
    this.jobOffer = props.jobOffer
    this.status = props.status
  }

  get _id(): Id {
    return this.id
  }
}
