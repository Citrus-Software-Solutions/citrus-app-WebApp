import { User } from './User'
import { Skill, Status } from './JobOffer'

type Name = string
type Postcod = number
type Address = {
  residentialInfo: Name
  street: Name
  city: Name
  country: Name
  postCod: Postcod
}

//URL TO IMAGE
type Logo = string

// export interface Employer {
//   companyName: Name
//   address: Address
//   contacts: User[]
//   logo: Logo
//   skills: Skill[]
//   specialRequeriments: Name
//   status: Status
// }

export interface Employer {
  id: string
  name: string
}
