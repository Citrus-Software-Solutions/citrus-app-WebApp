import { ConsultAllOfferDTOUi } from '@/job/domain/DTO/ConsultAllOfferDto'
import { ConsultAllOffersUseCase } from '@/job/application/use-cases/in/ConsultAllOffersUseCase'

export class ConsultAllOffersController {
  private consultAllOffersUseCase: ConsultAllOffersUseCase

  constructor(consultAllOffersUseCase: ConsultAllOffersUseCase) {
    this.consultAllOffersUseCase = consultAllOffersUseCase
  }

  public executeImpl(employerId: ConsultAllOfferDTOUi): void {
    this.consultAllOffersUseCase.execute(employerId)
  }
}
