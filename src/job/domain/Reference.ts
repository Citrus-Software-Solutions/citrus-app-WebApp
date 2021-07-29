import { Id } from './value-objects/Identifier'

export interface _Reference {
  id: Id //Added
  fullName: string
  jobTitle: string
  companyName: string
  phoneNumber: string
  email: string
}

export class Reference {
  private id
  private fullName
  private jobTitle
  private companyName
  private phoneNumber
  private email

  constructor(props: _Reference) {
    this.id = props.id
    this.fullName = props.fullName
    this.jobTitle = props.jobTitle
    this.companyName = props.companyName
    this.phoneNumber = props.phoneNumber
    this.email = props.email
  }
}
