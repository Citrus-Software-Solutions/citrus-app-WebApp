export interface _WorkExperience {
  jobTitle: string
  companyName: string
  category: string //FIXME:
}

export class WorkExperience {
  private jobTitle
  private companyName
  private category

  constructor(props: _WorkExperience) {
    this.jobTitle = props.jobTitle
    this.companyName = props.companyName
    this.category = props.category
  }
}
