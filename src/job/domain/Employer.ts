import { Id } from './value-objects/Identifier'
import { Address } from './value-objects/Address'
import { ContactInformation } from './value-objects/ContactInformation'
import { Skill } from './Skill'
import { Text } from './value-objects/Text'
import { EmployerStatus } from './value-objects/EmployerStatus'

export interface _Employer {
  id: Id
  companyName: string
  address: Address
  contacts: ContactInformation[] // al menos 1
  logo: string // FIXME
  skills: Skill[]
  special_requirements: Text
  status: EmployerStatus
  username: string
  token: string
  email: string
}

export class Employer {
  private id: Id
  private companyName: string
  private address: Address
  private contacts: ContactInformation[]
  private logo: string
  private skills: Skill[]
  private specialRequeriments: Text
  private status: EmployerStatus
  private username: string
  private token: string
  private email: string

  constructor(props: _Employer) {
    this.id = props.id
    this.companyName = props.companyName
    this.address = props.address
    this.contacts = props.contacts
    this.logo = props.logo
    this.skills = props.skills
    this.specialRequeriments = props.special_requirements
    this.status = props.status
    this.username = props.username
    this.token = props.token
    this.email = props.email
  }

  get _specialRequeriments() {
    return this.specialRequeriments
  }

  get _employer() {
    return {
      id: this.id,
      companyName: this.companyName,
      address: this.address,
      contacts: this.contacts,
      logo: this.logo,
      skills: this.skills,
      specialRequeriments: this.specialRequeriments,
      status: this.status,
    }
  }

  get _user() {
    return {
      username: this.username,
      token: this.token,
      email: this.email,
    }
  }

  get _skills() {
    return this.skills
  }

  get _logo() {
    return this.logo
  }

  get _contacts() {
    return this.contacts
  }

  get _address() {
    return this.address
  }

  get _id() {
    return this.id
  }

  get _companyName() {
    return this.companyName
  }

  get _status(): EmployerStatus {
    return this.status
  }

  set _status(status: EmployerStatus) {
    this.status = status
  }

  public validateEmployerStatus(): boolean | Error {
    if (this.status.EmployerStatus == 1) {
      throw new Error(
        'El usuario se encuentra suspendido, no se puede crear oferta'
      )
    }
    return true
  }
}
