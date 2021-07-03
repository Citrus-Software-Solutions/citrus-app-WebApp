import { JobOffer } from '../JobOffer'
import { Employer } from '../Employer'

export type BasicJobOfferDTO = Pick<
  JobOffer,
  | 'location'
  | 'duration'
  | 'certifications'
  | 'title'
  | 'deadline'
  | 'specialRequeriments'
  | 'hourlyRate'
>

export interface JobOfferDTO extends JobOffer {
  employer: Employer
}
