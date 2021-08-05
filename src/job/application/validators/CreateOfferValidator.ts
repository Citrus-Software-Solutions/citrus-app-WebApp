import { CreateOfferDTOApp } from '@/job/domain/DTO/CreateOfferDTO'
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
import { ModifyOfferDTO } from '@/job/domain/DTO/ModifyOfferDTO'
import { InstancesValidator } from '@/shared/application/validators/InstancesValidator'

export class CreateOfferValidator extends InstancesValidator {
  constructor(createJobOfferFields: CreateOfferDTOApp | ModifyOfferDTO) {
    super(createJobOfferFields)
    this.createValues()
  }

  protected createValues(): void {
    const titleOrError = this.instanceCreator<Title>(
      Title,
      this._offerFields.title,
      'title'
    )

    const locationOrError = this.instanceCreator<Location>(
      Location,
      this._offerFields.location,
      'location'
    )

    const deadlineOrError = this.instanceCreator<Deadline>(
      Deadline,
      this._offerFields.deadline,
      'dead_line'
    )

    const scheduleOrError = this.instanceCreator<Schedules>(
      Schedules,
      this._offerFields.schedules,
      'schedules'
    )

    const skillsOrError = this.instanceCreator<Skill>(
      Skill,
      this._offerFields.skills,
      'skill'
    )

    const specialRequirementsOrError = this.instanceCreator<Text>(
      Text,
      this._offerFields.specialRequirements,
      'specialRequirements'
    )

    const durationOrError = this.instanceCreator<Hours>(
      Hours,
      this._offerFields.duration,
      'duration'
    )

    const hourlyRateOrError = this.instanceCreator<Cost>(
      Cost,
      this._offerFields.hourlyRate,
      'hourlyRate'
    )

    const statusOrError = this.instanceCreator<JobOfferStatus>(
      JobOfferStatus,
      this._offerFields.status,
      'status'
    )

    const idOrError = this.instanceCreator<Id>(Id, this._offerFields.id, 'id')

    const employeerOrError = this.instanceCreator<Employer>(
      Employer,
      this._offerFields.employer,
      'employer'
    )

    const employeeOrError = this.instanceCreator<Employee>(
      Employee,
      this._offerFields.employee,
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
