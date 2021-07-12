import { Id } from '../../../domain/model/Identifier'
import { JobOffer } from '../../../domain/model/JobOffer'
export interface GetOfferPort {
  requestHandler(userId: Id): Promise<JobOffer>
}
