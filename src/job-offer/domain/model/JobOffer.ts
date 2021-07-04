import { Employer } from './Employer'
import { Location } from './Location'
import { Id } from './Shared'

export type Status = string

export interface JobOffer {
  id?: Id
  name: string
  description: string
  available_vacans: number
  date_begin: Date
  date_end: Date
  status: Status
  gender?: string
  salary: number
  min_age: number
  max_age: number
  employer: Employer
  location: Location
}
