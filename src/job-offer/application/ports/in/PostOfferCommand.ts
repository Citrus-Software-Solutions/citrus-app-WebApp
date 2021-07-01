import { JobOffer } from '../../../domain/JobOffer'

export class PostOfferCommand {
  jobOfferFields: JobOffer

  constructor(jobOfferFields: JobOffer) {
    this.jobOfferFields = jobOfferFields
  }

  isOnlySpaces(str: string): boolean {
    return Boolean(!str.replace(/\s/g, '').length)
  }

  isValid(): boolean {
    if (
      this.isOnlySpaces(this.jobOfferFields.description) ||
      this.isOnlySpaces(this.jobOfferFields.location) ||
      this.isOnlySpaces(this.jobOfferFields.name) ||
      this.isOnlySpaces(this.jobOfferFields.gender) ||
      this.jobOfferFields.salary === 0 ||
      this.jobOfferFields.available_vacans === 0 ||
      this.jobOfferFields.min_age === 0
    ) {
      return false
    }
    return true
  }
}
