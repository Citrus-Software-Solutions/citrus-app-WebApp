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

export class DuplicateOfferValidator {
  private JobOfferFields
  private _isValid: boolean
  private _jobOfferValues: _JobOffer

  constructor(JobOfferFields: any) {
    this.JobOfferFields = JobOfferFields
    this._isValid = false
    this._jobOfferValues = null as unknown as _JobOffer
    this.createValues()
  }

  public get offerValues(): _JobOffer {
    return this._jobOfferValues
  }

  public isValid(): boolean {
    return this._isValid
  }

  private instanceCreator<T>(valueObj: any, fieldContent: any): T | null {
    try {
      return new valueObj(fieldContent as T)
    } catch (error) {
      console.log(error)
      return null
    }
  }

  private createValues(): void {
    const titleOrError = this.instanceCreator<Title>(
      Title,
      this.JobOfferFields.title
    )

    const locationOrError = this.instanceCreator<Location>(
      Location,
      this.JobOfferFields.location
    )

    const deadlineOrError = this.instanceCreator<Deadline>(
      Deadline,
      this.JobOfferFields.deadline
    )

    const scheduleOrError = this.instanceCreator<Schedules>(
      Schedules,
      this.JobOfferFields.schedules
    )

    const skillsOrError = this.instanceCreator<Skill>(
      Skill,
      this.JobOfferFields.skills
    )

    const specialRequirementsOrError = this.instanceCreator<Text>(
      Text,
      this.JobOfferFields.specialRequirements
    )

    const durationOrError = this.instanceCreator<Hours>(
      Hours,
      this.JobOfferFields.duration
    )

    const hourlyRateOrError = this.instanceCreator<Cost>(
      Cost,
      this.JobOfferFields.hourlyRate
    )

    const statusOrError = this.instanceCreator<JobOfferStatus>(
      JobOfferStatus,
      this.JobOfferFields.status
    )

    const idOrError = this.instanceCreator<Id>(Id, this.JobOfferFields.id)

    const employeerOrError = this.instanceCreator<Employer>(
      Employer,
      this.JobOfferFields.employer
    )

    const employeeOrError = this.instanceCreator<Employee>(
      Employee,
      this.JobOfferFields.employee
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
