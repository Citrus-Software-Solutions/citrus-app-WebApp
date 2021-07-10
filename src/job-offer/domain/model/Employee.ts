import { Address } from '../value-objects/Address'
import { WorkExperience } from './WorkExperience'
import { Skill } from './Skill'
import { Reference } from './Reference'
import { Id } from '../value-objects/Identifier'

export interface _Employee {
  id: Id
  firstName: string
  middleName: string
  lastName: string
  phoneNumber: string
  dateOfBirth: Date
  address: Address
  ssn: string
  educationLevel: number //FIXME:
  workExperience: WorkExperience[] //FIXME: l
  skills: Skill[] //FIXME: LIST
  //   trainings: Training[] //FIXME: LIST
  references: Reference[] //FIXME: LIST
  rating: number
  status: number //FIXME:
}

export class Employee {
  constructor(props: _Employee) {
    //   validations
    return props
  }
}
