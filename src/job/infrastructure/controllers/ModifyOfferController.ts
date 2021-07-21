import { ModifyOfferUseCase } from '../../application/use-cases/in/ModifyOfferUseCase'
import { JobOffer } from '../../domain/JobOffer'

export class ModifyOfferController {
  public modifyOfferUseCase: ModifyOfferUseCase

  public constructor(useCase: ModifyOfferUseCase) {
    this.modifyOfferUseCase = useCase
  }

  public executeImpl(jobOffer: JobOffer): void {
    this.modifyOfferUseCase.execute(jobOffer)
  }
}
