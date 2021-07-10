import { JobOffer } from '@/job/domain/JobOffer'
import { Id } from '../../../domain/Identifier'

export interface GetOfferUseCase {
  getOffers(userId: Id): Promise<JobOffer>
}
