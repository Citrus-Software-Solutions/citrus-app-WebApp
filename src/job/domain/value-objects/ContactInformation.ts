export interface _ContactInformation {
  fullName: string
  jobTitle: string
  phoneNumber: string
  email: string
}

export class ContactInformation {
  private fullName
  private jobTitle
  private phoneNumber
  private email

  constructor(props: _ContactInformation) {
    //   validations
    this.fullName = props.fullName
    this.jobTitle = props.jobTitle
    this.phoneNumber = props.phoneNumber
    this.email = props.email
  }
}
