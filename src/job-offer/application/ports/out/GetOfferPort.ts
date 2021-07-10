import { Id } from '../../../domain/value-objects/Identifier'
import { JobOffer } from '../../../domain/model/JobOffer'
export interface GetOfferPort {
  requestHandler(userId: Id): Promise<JobOffer>
}
