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
  specialRequirements: Text
  status: EmployerStatus
}

export class Employer {
  private _id: Id
  private _companyName: string
  private _address: Address
  private _contacts: ContactInformation[]
  private _logo: string
  private _skills: Skill[]
  private _specialRequeriments: Text
  private _status: EmployerStatus

  constructor(props: _Employer) {
    this._id = props.id
    this._companyName = props.companyName
    this._address = props.address
    this._contacts = props.contacts
    this._logo = props.logo
    this._skills = props.skills
    this._specialRequeriments = props.specialRequirements
    this._status = props.status
  }

  get status(): EmployerStatus {
    return this._status
  }

  set status(status: EmployerStatus) {
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
