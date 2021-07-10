import { Id } from '../value-objects/Identifier'

export interface _Reference {
  id: Id //Added
  fullName: string
  jobTitle: string
  companyName: string
  phoneNumber: string
  email: string
}

export class Reference {
  constructor(props: _Reference) {
    //   validations
    return props
  }
}
