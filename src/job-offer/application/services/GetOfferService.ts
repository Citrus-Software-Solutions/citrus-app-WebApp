import { GetOfferUseCase } from '../ports/in/use-cases/GetOfferUseCase'
import { GetOfferPort } from '../ports/out/GetOfferPort'
import { Id } from '../../domain/value-objects/Identifier'
import { JobOffer } from '../../domain/model/JobOffer'

export class GetOfferService implements GetOfferUseCase {
  getOfferPort: GetOfferPort

  constructor(getOfferPort: GetOfferPort) {
    this.getOfferPort = getOfferPort
  }

  getOffers(userId: Id): Promise<JobOffer> {
    return this.getOfferPort.requestHandler(userId)
  }
}
