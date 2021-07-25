import { Employer } from './Employer'
import { Location } from './Location'
import { Skill } from './Skill'
import { Certification } from './Certification'
import { Employee } from './Employee'
import { Text } from './value-objects/Text'
import { Id } from './value-objects/Identifier'
import { Hours } from './value-objects/Hours'
import { Title } from './value-objects/Title'
import { JobOfferStatus } from './value-objects/JobOfferStatus'
export interface _JobOffer {
  id: Id
  title: Title
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
  status: JobOfferStatus // FIXME:
}

type Cost = number
export class JobOffer {
  id: Id
  title: Title
  employer: Employer
  location: Location
  deadline: Date
  schedules: Date[]
  skills: Skill[]
  specialRequirements: Text
  certifications: Certification[]
  duration: Hours
  hourlyRate: Cost
  employee: Employee //No debería ser opcional?
  status: JobOfferStatus

  constructor(props: _JobOffer, dateNow: Date) {
    // business Validations
    // domain events
    this.id = props.id
    this.title = props.title
    this.employer = props.employer
    this.location = props.location
    this.deadline = props.deadline
    this.schedules = props.schedules
    this.skills = props.skills
    this.specialRequirements = props.specialRequirements
    this.certifications = props.certifications
    this.duration = props.duration
    this.hourlyRate = this.validateCost(props.hourlyRate)
    this.employee = props.employee
    this.status = props.status
  }

  private validateCost(cost: Cost): Cost {
    if (cost > 0 && cost < 1000) {
      return cost
    } else {
      throw new Error('El monto debe ser mayor a 0 y menor a 1000')
    }
  }

  public isDeletable(): boolean | Error {
    if (this.status.jobOfferStatus !== 0) {
      throw new Error(
        'La oferta de trabajo no puede eliminarse ya que se encuentra en curso'
      )
    }
    return true
  }
}
