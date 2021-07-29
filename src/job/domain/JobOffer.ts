import { Employer } from './Employer'
import { Location } from './value-objects/Location'
import { Skill } from './Skill'
import { Employee } from './Employee'
import { Text } from './value-objects/Text'
import { Id } from './value-objects/Identifier'
import { Hours } from './value-objects/Hours'
import { Schedules } from './value-objects/Schedules'
import { Title } from './value-objects/Title'
import { JobOfferStatus } from './value-objects/JobOfferStatus'
import { Deadline } from './value-objects/Deadline'
import { Cost } from './value-objects/Cost'

export interface _JobOffer {
  id: Id
  title: Title
  employer: Employer
  location: Location
  deadline: Deadline
  schedules: Schedules
  skills: Skill
  specialRequirements: Text
  duration: Hours
  hourlyRate: Cost
  employee: Employee
  status: JobOfferStatus
}

export class JobOffer {
  private id
  private title
  private employer
  private location
  private deadline
  private schedules
  private skills
  private specialRequirements
  private duration
  private hourlyRate
  private employee
  private status

  constructor(props: _JobOffer) {
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
    this.duration = props.duration
    this.hourlyRate = props.hourlyRate
    this.employee = props.employee
    this.status = props.status
  }

  public get _id() {
    return this.id._id
  }
  public get _title() {
    return this.title._title
  }

  public get _employer() {
    return this.employer._employer
  }

  public get _location() {
    return this.location._location
  }

  public get _deadline() {
    return this.deadline._deadline
  }

  public get _schedules() {
    return this.schedules.dates
  }

  public get _skills() {
    return this.skills._skill
  }

  public get _specialRequirements() {
    return this.specialRequirements._value
  }

  public get _duration() {
    return this.duration._value
  }

  public get _hourlyRate() {
    return this.hourlyRate._value
  }

  public get _employee() {
    return this.employee
  }

  public get _status() {
    return this.status.jobOfferStatus
  }

  // private validateCost(): Cost {
  //   if (this.hourlyRate > 0 && this.hourlyRate < 1000) {
  //     return cost
  //   } else {
  //     throw new Error('El monto debe ser mayor a 0 y menor a 1000')
  //   }
  // }

  public isDeletable(): boolean | Error {
    if (this.status.jobOfferStatus !== 0) {
      throw new Error(
        'La oferta de trabajo no puede eliminarse ya que se encuentra en curso'
      )
    }
    return true
  }

  public checkModifiability(): void {
    if (!this.status.isModifiable()) {
      throw new Error(
        'La oferta de trabajo no puede modificarse porque está activa'
      )
    }
  }

  public suspendOffer() {
    this.status.setToCanceled()
  }

  public publishOffer() {
    this.status.setToPublished()
  }
}
