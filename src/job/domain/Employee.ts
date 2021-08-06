import { Address } from './value-objects/Address'
import { WorkExperience } from './WorkExperience'
import { Skill } from './Skill'
import { Reference } from './Reference'
import { Id } from './value-objects/Identifier'

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
  public id
  private firstName
  private middleName
  private lastName
  private phoneNumber
  private dateOfBirth
  private address
  private ssn
  private educationLevel
  private workExperience
  private skills
  private references
  private rating
  private status

  constructor(props: _Employee) {
    this.id = props.id
    this.firstName = props.firstName
    this.middleName = props.middleName
    this.lastName = props.lastName
    this.phoneNumber = props.phoneNumber
    this.dateOfBirth = props.dateOfBirth
    this.address = props.address
    this.ssn = props.ssn
    this.educationLevel = props.educationLevel
    this.workExperience = props.workExperience
    this.skills = props.skills
    this.references = props.references
    this.rating = props.rating
    this.status = props.status
  }
}
