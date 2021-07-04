import { JobOffer } from '@/job-offer/domain/model/JobOffer'
import { Id } from '../../../../domain/model/Shared'
export interface GetOfferUseCase {
  getOffers(userId: Id): Promise<JobOffer>
}
