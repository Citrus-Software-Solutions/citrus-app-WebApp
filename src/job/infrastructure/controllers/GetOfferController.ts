import { Id } from '@/job/domain/Identifier'
import { GetOfferUseCase } from '@/job/application/use-cases/in/GetOfferUseCase'
import { JobOffer } from '@/job/domain/JobOffer'

export class GetOfferController {
  getOfferUseCase: GetOfferUseCase

  constructor(getOfferUseCase: GetOfferUseCase) {
    this.getOfferUseCase = getOfferUseCase
  }

  getOffersData(id: Id): Promise<JobOffer> {
    return this.getOfferUseCase.getOffers(id)
  }
}
