import { Id } from './value-objects/Identifier'
import { Address } from './value-objects/Address'
import { ContactInformation } from './value-objects/ContactInformation'
import { Skill } from './Skill'

// export interface Employer {
//   id: Id
//   name: string
// }

export interface _Employer {
  id: Id
  companyName: string
  address: Address
  contacts: ContactInformation[] // al menos 1
  logo: string // FIXME:
  skills: Skill[]
  specialRequirements: string
  status: number //FIXME:
}

export class Employer {
  constructor(props: _Employer) {
    // Validations
    return props
  }
}
