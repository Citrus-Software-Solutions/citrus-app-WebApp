import { Employer } from './Employer'
import { Employee } from './Employee'

export type Id = string
export type Title = string
export type Description = string
export type Day = number
export type Month = number
export type Year = number
export type Date = {
  day: Day
  month: Month
  year: Year

  //Metodos para validar el value object
}
export type Duration = number
export type HourlyRate = number
export type Name = string

export type Skill = {
  id: Id
  title: Title
  description: Description
}

export type Certification = {
  id: Id
  title: Title
  description: Description
}

export type Location = string

export type Status = {
  id: Id
  title: Title
  description: Description
}
export interface JobOffer {
  id: Id
  title: Title
  // employer: Employer
  // location: Location
  // deadline: Date
  // schedules: Date[]
  // skills: Skill[]
  // specialRequeriments: Name
  // certifications: Certification[]
  // duration: Duration
  // hourlyRate: HourlyRate
  // employee: Employee
  // status: Status
}
