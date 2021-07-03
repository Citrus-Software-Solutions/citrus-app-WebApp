import { GetOfferUseCase } from '../../../application/ports/in/use-cases/GetOfferUseCase'

export class GetOfferController {
  getOfferUseCase: GetOfferUseCase

  constructor(getOfferUseCase: GetOfferUseCase) {
    this.getOfferUseCase = getOfferUseCase
  }

  getOffersData(id: any): void {
    return this.getOfferUseCase.getOffers(id)
  }
}
