import { Employer } from './Employer'
import { Location } from './Location'
import { Skill } from './Skill'
import { Certification } from './Certification'
import { Employee } from './Employee'
import { Text } from './value-objects/Text'
import { Id } from './value-objects/Identifier'
import { Hours } from './value-objects/Hours'
import { Cost } from './value-objects/Cost'

// export type Status = string

// export interface JobOffer {
//   id: Id
//   name: string
//   description: string
//   available_vacans: number
//   date_begin: Date
//   date_end: Date
//   status: Status
//   gender?: string
//   salary: number
//   min_age: number
//   max_age: number
//   employer: Employer
//   location: Location
// }

export interface _JobOffer {
  id: Id
  title: Text
  employer: Employer
  location: Location
  deadline: Date
  schedules: Date[] //  como es esto?
  skills: Skill[]
  specialRequirements: Text
  certifications: Certification[]
  duration: Hours // total de horas para el trabajo
  hourlyRate: Cost
  employee: Employee
  status: number // FIXME:
}

export class JobOffer {
  constructor(props: _JobOffer) {
    // business Validations
    // domain events
    return props
  }
}
