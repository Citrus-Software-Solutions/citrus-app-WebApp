import { GetOfferUseCase } from '../use-cases/in/GetOfferUseCase'
import { GetOfferPort } from '../use-cases/out/GetOfferPort'
import { Id } from '../../domain/Identifier'
import { JobOffer } from '../../domain/JobOffer'

export class GetOfferService implements GetOfferUseCase {
  getOfferPort: GetOfferPort

  constructor(getOfferPort: GetOfferPort) {
    this.getOfferPort = getOfferPort
  }

  getOffers(userId: Id): Promise<JobOffer> {
    return this.getOfferPort.requestHandler(userId)
  }
}
