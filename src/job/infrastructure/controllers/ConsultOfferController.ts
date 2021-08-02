import { ConsultOfferUseCase } from '@/job/application/use-cases/in/ConsultOfferUseCase'
import { ConsultOfferDTOUi } from '@/job/domain/DTO/ConsultOfferDto'

export class ConsultOfferController {
  private consultOfferUseCase: ConsultOfferUseCase

  constructor(consultOfferUseCase: ConsultOfferUseCase) {
    this.consultOfferUseCase = consultOfferUseCase
  }

  public executeImpl(offerId: ConsultOfferDTOUi): void {
    this.consultOfferUseCase.execute(offerId)
  }
}
