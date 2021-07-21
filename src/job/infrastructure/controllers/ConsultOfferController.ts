import { Id } from '@/job/domain/Identifier'
import { ConsultOfferUseCase } from '@/job/application/use-cases/in/ConsultOfferUseCase'

export class ConsultOfferController {
  private consultOfferUseCase: ConsultOfferUseCase

  constructor(consultOfferUseCase: ConsultOfferUseCase) {
    this.consultOfferUseCase = consultOfferUseCase
  }

  public executeImpl(offerId: Id): void {
    this.consultOfferUseCase.execute(offerId)
  }
}
