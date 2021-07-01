import { JobOffer } from '../JobOffer'

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
