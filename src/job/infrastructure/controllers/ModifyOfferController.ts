import { ModifyOfferUseCase } from '../../application/use-cases/in/ModifyOfferUseCase'
import { ModifyOfferDTO } from '../../domain/DTO/ModifyOfferDTO'

export class ModifyOfferController {
  public modifyOfferUseCase: ModifyOfferUseCase

  public constructor(useCase: ModifyOfferUseCase) {
    this.modifyOfferUseCase = useCase
  }

  public executeImpl(jobOffer: ModifyOfferDTO): void {
    this.modifyOfferUseCase.execute(jobOffer)
  }
}
