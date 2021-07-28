import { CreateOfferDTOApp } from '@/job/domain/DTO/CreateOfferDTO'
import { Text } from '@/job/domain/value-objects/Text'
import { Location } from '@/job/domain/value-objects/Location'
import { Hours } from '@/job/domain/value-objects/Hours'
import { Cost } from '@/job/domain/value-objects/Cost'
import { Deadline } from '@/job/domain/value-objects/Deadline'
import { _JobOffer } from '@/job/domain/JobOffer'
import { Employer } from '@/job/domain/Employer'
import { Employee } from '@/job/domain/Employee'
import { Skill } from '@/job/domain/Skill'
import { Id } from '@/job/domain/value-objects/Identifier'
import { Schedules } from '@/job/domain/value-objects/Schedules'
import { JobOfferStatus } from '@/job/domain/value-objects/JobOfferStatus'
import { Title } from '@/job/domain/value-objects/Title'
import { ModifyOfferDTO } from '@/job/domain/DTO/ModifyOfferDTO'

export class PostOfferValidator {
  private createJobOfferFields: CreateOfferDTOApp | ModifyOfferDTO
  private createJobOfferErrors: { [name: string]: any }
  private _isValid: boolean
  private _jobOfferValues: _JobOffer

  constructor(createJobOfferFields: CreateOfferDTOApp | ModifyOfferDTO) {
    this.createJobOfferFields = createJobOfferFields
    this.createJobOfferErrors = {}
    this._isValid = false
    this._jobOfferValues = null as unknown as _JobOffer
    this.createValues()
  }

  public get errors(): { [name: string]: any } {
    return this.createJobOfferErrors
  }

  public get offerValues(): _JobOffer {
    return this._jobOfferValues
  }

  public isValid(): boolean {
    return this._isValid
  }

  private instanceCreator<T>(
    valueObj: any,
    fieldContent: any,
    fieldName: string
  ): T | null {
    try {
      return new valueObj(fieldContent as T)
    } catch (error) {
      this.createJobOfferErrors[fieldName] = error.message
      return null
    }
  }

  private createValues(): void {
    const titleOrError = this.instanceCreator<Title>(
      Title,
      this.createJobOfferFields.title,
      'title'
    )

    const locationOrError = this.instanceCreator<Location>(
      Location,
      this.createJobOfferFields.location,
      'location'
    )

    const deadlineOrError = this.instanceCreator<Deadline>(
      Deadline,
      this.createJobOfferFields.deadline,
      'deadline'
    )

    const scheduleOrError = this.instanceCreator<Schedules>(
      Schedules,
      this.createJobOfferFields.schedules,
      'schedules'
    )

    const skillsOrError = this.instanceCreator<Skill>(
      Skill,
      this.createJobOfferFields.skills,
      'skill'
    )

    const specialRequirementsOrError = this.instanceCreator<Text>(
      Text,
      this.createJobOfferFields.specialRequirements,
      'specialRequirements'
    )

    const durationOrError = this.instanceCreator<Hours>(
      Hours,
      this.createJobOfferFields.duration,
      'duration'
    )

    const hourlyRateOrError = this.instanceCreator<Cost>(
      Cost,
      this.createJobOfferFields.hourlyRate,
      'hourlyRate'
    )

    const statusOrError = this.instanceCreator<JobOfferStatus>(
      JobOfferStatus,
      this.createJobOfferFields.status,
      'status'
    )

    const idOrError = this.instanceCreator<Id>(
      Id,
      this.createJobOfferFields.id,
      'id'
    )

    const employeerOrError = this.instanceCreator<Employer>(
      Employer,
      this.createJobOfferFields.employer,
      'employer'
    )

    const employeeOrError = this.instanceCreator<Employee>(
      Employee,
      this.createJobOfferFields.employee,
      'employee'
    )

    this._isValid = Boolean(
      titleOrError &&
        locationOrError &&
        deadlineOrError &&
        specialRequirementsOrError &&
        durationOrError &&
        hourlyRateOrError &&
        scheduleOrError &&
        skillsOrError &&
        statusOrError
    )

    this._jobOfferValues = {
      title: titleOrError as Title,
      duration: durationOrError as Hours,
      id: idOrError as Id,
      location: locationOrError as Location,
      hourlyRate: hourlyRateOrError as Cost,
      deadline: deadlineOrError as Deadline,
      schedules: scheduleOrError as Schedules,
      skills: skillsOrError as Skill,
      specialRequirements: specialRequirementsOrError as Text,
      employee: employeeOrError as Employee,
      status: statusOrError as JobOfferStatus,
      employer: employeerOrError as Employer,
    }
  }
}
