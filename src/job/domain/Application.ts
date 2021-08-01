import { Id } from './value-objects/Identifier'
import { Employee } from './Employee'
import { JobOffer, _JobOffer } from './JobOffer'

export enum Status {
  PendingReview = 0,
  Accepted,
  Rejected,
}
export interface _Application {
  id: Id
  date: Date
  employee: Employee
  jobOffer: JobOffer
  status: Status
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

  get _date(): Date {
    return this.date
  }

  get _employee(): Employee {
    return this.employee
  }

  get _jobOffer(): JobOffer {
    return this.jobOffer
  }

  get _status(): Status {
    return this.status
  }
}
