import { Id } from '@/job/domain/Identifier'
import { ConsultAllOffersUseCase } from '@/job/application/use-cases/in/ConsultAllOffersUseCase'

export class ConsultAllOffersController {
  private consultAllOffersUseCase: ConsultAllOffersUseCase

  constructor(consultAllOffersUseCase: ConsultAllOffersUseCase) {
    this.consultAllOffersUseCase = consultAllOffersUseCase
  }

  public executeImpl(employerId: Id): void {
    this.consultAllOffersUseCase.execute(employerId)
  }
}
