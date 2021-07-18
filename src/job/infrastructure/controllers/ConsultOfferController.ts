import { Id } from '@/job/domain/Identifier'
import { ConsultOfferUseCase } from '@/job/application/use-cases/in/ConsultOfferUseCase'

export class GetOfferController {
  private consultOfferUseCase: ConsultOfferUseCase

  constructor(consultOfferUseCase: ConsultOfferUseCase) {
    this.consultOfferUseCase = consultOfferUseCase
  }

  public executeImpl(employerId: Id): void {
    this.consultOfferUseCase.execute(employerId)
  }
}
