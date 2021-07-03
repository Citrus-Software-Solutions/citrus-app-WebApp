import { Id } from '@/job-offer/domain/model/Shared'
import { GetOfferUseCase } from '../../../application/ports/in/use-cases/GetOfferUseCase'
import { JobOffer } from '../../../domain/model/JobOffer'

export class GetOfferController {
  getOfferUseCase: GetOfferUseCase

  constructor(getOfferUseCase: GetOfferUseCase) {
    this.getOfferUseCase = getOfferUseCase
  }

  getOffersData(id: Id): Promise<JobOffer> {
    return this.getOfferUseCase.getOffers(id)
  }
}
