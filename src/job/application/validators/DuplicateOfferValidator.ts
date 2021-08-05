import { Text } from '@/job/domain/value-objects/Text'
import { Location } from '@/job/domain/value-objects/Location'
import { Hours } from '@/job/domain/value-objects/Hours'
import { Cost } from '@/job/domain/value-objects/Cost'
import { Deadline } from '@/job/domain/value-objects/Deadline'
import { Employer } from '@/job/domain/Employer'
import { Employee } from '@/job/domain/Employee'
import { Skill } from '@/job/domain/Skill'
import { Id } from '@/job/domain/value-objects/Identifier'
import { Schedules } from '@/job/domain/value-objects/Schedules'
import { JobOfferStatus } from '@/job/domain/value-objects/JobOfferStatus'
import { Title } from '@/job/domain/value-objects/Title'
import { InstancesValidator } from '@/shared/application/validators/InstancesValidator'

export class DuplicateOfferValidator extends InstancesValidator {
  constructor(JobOfferFields: any) {
    super(JobOfferFields)
    this.createValues()
  }

  protected createValues(): void {
    const titleOrError = this.instanceCreator<Title>(
      Title,
      this._offerFields.title
    )

    const locationOrError = this.instanceCreator<Location>(
      Location,
      this._offerFields.location
    )

    const deadlineOrError = this.instanceCreator<Deadline>(
      Deadline,
      this._offerFields.deadline
    )

    const scheduleOrError = this.instanceCreator<Schedules>(
      Schedules,
      this.dateParser(this._offerFields.schedules)
    )

    const skillsOrError = this.instanceCreator<Skill>(
      Skill,
      this._offerFields.skills
    )

    const specialRequirementsOrError = this.instanceCreator<Text>(
      Text,
      this._offerFields.specialRequirements
    )

    const durationOrError = this.instanceCreator<Hours>(
      Hours,
      this._offerFields.duration
    )

    const hourlyRateOrError = this.instanceCreator<Cost>(
      Cost,
      this._offerFields.hourlyRate
    )

    const statusOrError = this.instanceCreator<JobOfferStatus>(
      JobOfferStatus,
      this._offerFields.status
    )

    const idOrError = this.instanceCreator<Id>(Id, this._offerFields.id)

    const employeerOrError = this.instanceCreator<Employer>(
      Employer,
      this._offerFields.employer
    )

    const employeeOrError = this.instanceCreator<Employee>(
      Employee,
      this._offerFields.employee
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

    this._offerValues = {
      title: titleOrError as Title,
      duration: durationOrError as Hours,
      id: idOrError as Id,
      location: locationOrError as Location,
      hourlyRate: hourlyRateOrError as Cost,
      dead_line: deadlineOrError as Deadline,
      schedules: scheduleOrError as Schedules,
      skills: skillsOrError as Skill,
      specialRequirements: specialRequirementsOrError as Text,
      employee: employeeOrError as Employee,
      status: statusOrError as JobOfferStatus,
      employer: employeerOrError as Employer,
    }
  }
}
