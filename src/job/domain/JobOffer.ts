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

  //Como haremos para importar la fecha actual ?
  datenow: Date

  constructor(props: _JobOffer, dateNow: Date) {
    // business Validations
    // domain events
    this.id = props.id
    this.title = props.title

    this.employer = this.validateEmployerStatus(props.employer)

    this.location = props.location
    //Acomodar esta fecha
    this.datenow = dateNow
    this.deadline = this.validateDate(props.deadline, this.datenow)
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

  private validateDate(date: Date, dateNow: Date): Date {
    if (date <= dateNow) {
      throw new Error(
        'La fecha de la oferta de trabajo no puede ser menor a la fecha actual'
      )
    }
    return date
  }

  private validateEmployerStatus(employer: Employer): Employer {
    if (employer.status.EmployerStatus == 1) {
      throw new Error(
        'El usuario se encuentra suspendido, no se puede crear oferta'
      )
    }
    return employer
  }

  // public addDateToSchedule(date: Date[]): void {}
}
