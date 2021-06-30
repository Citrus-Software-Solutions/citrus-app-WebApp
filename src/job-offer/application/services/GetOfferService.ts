import { GetOfferUseCase } from '../ports/in/use-cases/GetOfferUseCase'
import { GetOfferPort } from '../ports/out/GetOfferPort'

export class GetOfferService implements GetOfferUseCase {
  getOfferPort: GetOfferPort

  constructor(getOfferPort: GetOfferPort) {
    this.getOfferPort = getOfferPort
  }

  getOffers(userId: any): void {
    return this.getOfferPort.requestHandler(userId)
  }
}
