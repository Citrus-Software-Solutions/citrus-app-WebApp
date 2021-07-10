import { _JobOffer } from '../model/JobOffer'

export type CreateOfferDTO = Omit<_JobOffer, 'id' | 'employee'>
