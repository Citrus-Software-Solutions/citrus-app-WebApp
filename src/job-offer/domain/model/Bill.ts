import { Id } from '../value-objects/Identifier'
import { Employer } from './Employer'
import { JobOffer } from './JobOffer'

export interface _Bill {
  id: Id
  employer: Employer
  jobs: JobOffer[]
  amount: number
  date: Date
}

export class Bill {
  constructor(props: _Bill) {
    //   validations
    return props
  }
}
