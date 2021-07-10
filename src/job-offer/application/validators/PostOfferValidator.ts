import { CreateOfferDTO } from '../../domain/DTO/CreateOfferDto'
import { Text, _Text } from '../../domain/value-objects/Text'
import { Employer, _Employer } from '../../domain/model/Employer'
import { Location, _Location } from '../../domain/model/Location'
import { Hours, _Hours } from '@/job-offer/domain/value-objects/Hours'
import { Cost, _Cost } from '@/job-offer/domain/value-objects/Cost'
import { Deadline, _Deadline } from '@/job-offer/domain/value-objects/Deadline'

export class PostOfferValidator {
  private createJobOfferFields: CreateOfferDTO
  private createJobOfferErrors: { [name: string]: any }

  constructor(createJobOfferFields: CreateOfferDTO) {
    this.createJobOfferFields = createJobOfferFields
    this.createJobOfferErrors = {}
  }

  public get errors(): { [name: string]: any } {
    return this.createJobOfferErrors
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

  public isValid(): boolean {
    const titleOrError = this.instanceCreator<_Text>(
      Text,
      this.createJobOfferFields.title,
      'title'
    )

    const employerOrError = this.instanceCreator<_Employer>(
      Employer,
      this.createJobOfferFields.employer,
      'employer'
    )

    const locationOrError = this.instanceCreator<_Location>(
      Location,
      this.createJobOfferFields.location,
      'location'
    )

    const deadlineOrError = this.instanceCreator<_Deadline>(
      Deadline,
      this.createJobOfferFields.deadline,
      'deadline'
    )

    // // const schedulesOrError = new Schedules() //FIXME: lista de schedules

    // // const skillsOrError = new Skills()  //FIXME: lista de skills

    const specialRequirementsOrError = this.instanceCreator<_Text>(
      Text,
      this.createJobOfferFields.specialRequirements,
      'specialRequirements'
    )

    // // const certificationsOrError = new Certifications() //FIXME: lista de certificaciones

    const durationOrError = this.instanceCreator<_Hours>(
      Hours,
      this.createJobOfferFields.duration,
      'duration'
    )

    const hourlyRateOrError = this.instanceCreator<_Cost>(
      Cost,
      this.createJobOfferFields.hourlyRate,
      'hourlyRate'
    )

    // const statusOrError = new Status() //FIXME: status value object

    const areValueObjectsOk = Boolean(
      titleOrError &&
        employerOrError &&
        locationOrError &&
        deadlineOrError &&
        specialRequirementsOrError &&
        durationOrError &&
        hourlyRateOrError
    )

    return areValueObjectsOk
  }
}
