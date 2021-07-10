import { _JobOffer } from '../JobOffer'

export type CreateOfferDTO = Omit<_JobOffer, 'id' | 'employee'>
