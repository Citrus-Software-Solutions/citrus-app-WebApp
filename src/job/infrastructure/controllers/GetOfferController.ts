import { Id } from '@/job/domain/Identifier'
import { GetOfferUseCase } from '../../application/use-cases/in/GetOfferUseCase'
import { JobOffer } from '../../domain/JobOffer'

export class GetOfferController {
  getOfferUseCase: GetOfferUseCase

  constructor(getOfferUseCase: GetOfferUseCase) {
    this.getOfferUseCase = getOfferUseCase
  }

  getOffersData(id: Id): Promise<JobOffer> {
    return this.getOfferUseCase.getOffers(id)
  }
}
