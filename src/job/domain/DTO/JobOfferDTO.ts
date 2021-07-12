import { JobOffer } from '../model/JobOffer'

export type BasicJobOfferDTO = Pick<
  JobOffer,
  'id' | 'name' | 'description' | 'status'
>
