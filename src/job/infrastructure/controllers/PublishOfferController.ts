import { PublishOfferDTOUi } from '@/job/domain/DTO/PublishOfferDto'
import { PublishOfferUseCase } from '@/job/application/use-cases/in/PublishOfferUseCase'

export class PublishOfferController {
  private publishOfferUseCase: PublishOfferUseCase

  constructor(publishOfferUseCase: PublishOfferUseCase) {
    this.publishOfferUseCase = publishOfferUseCase
  }

  public executeImpl(offerId: PublishOfferDTOUi): void {
    this.publishOfferUseCase.execute(offerId)
  }
}
