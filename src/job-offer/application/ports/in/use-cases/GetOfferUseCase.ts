import { JobOffer } from '@/job-offer/domain/model/JobOffer'
import { Id } from '../../../../domain/value-objects/Identifier'
export interface GetOfferUseCase {
  getOffers(userId: Id): Promise<JobOffer>
}
