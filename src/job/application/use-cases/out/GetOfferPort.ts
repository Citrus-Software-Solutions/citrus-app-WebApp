import { Id } from '@/job/domain/value-objects/Identifier'
import { JobOffer } from '@/job/domain/JobOffer'

export interface GetOfferPort {
  requestHandler(userId: Id): Promise<JobOffer>
}
