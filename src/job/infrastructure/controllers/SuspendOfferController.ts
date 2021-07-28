import { SuspendOfferDTOUi } from '@/job/domain/DTO/SuspendOfferDto'
import { SuspendOfferUseCase } from '@/job/application/use-cases/in/SuspendOfferUseCase'

export class SuspendOfferController {
  private suspendOfferUseCase: SuspendOfferUseCase

  constructor(suspendOfferUseCase: SuspendOfferUseCase) {
    this.suspendOfferUseCase = suspendOfferUseCase
  }

  public executeImpl(offerId: SuspendOfferDTOUi): void {
    this.suspendOfferUseCase.execute(offerId)
  }
}
