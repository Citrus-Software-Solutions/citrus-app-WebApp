import { GetOfferUseCase } from '@/job/application/use-cases/in/GetOfferUseCase'
import { GetOfferPort } from '@/job/application/use-cases/out/GetOfferPort'
import { Id } from '@/job/domain/value-objects/Identifier'
import { JobOffer } from '@/job/domain/JobOffer'

export class GetOfferService implements GetOfferUseCase {
  getOfferPort: GetOfferPort

  constructor(getOfferPort: GetOfferPort) {
    this.getOfferPort = getOfferPort
  }

  getOffers(userId: Id): Promise<JobOffer> {
    return this.getOfferPort.requestHandler(userId)
  }
}
