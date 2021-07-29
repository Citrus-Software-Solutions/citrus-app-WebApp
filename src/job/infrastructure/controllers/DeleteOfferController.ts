import { DeleteOfferUseCase } from '../../application/use-cases/in/DeleteOfferUseCase'
import { Id } from '../../domain/value-objects/Identifier'

export class DeleteOfferController {
  private deleteOfferUseCase: DeleteOfferUseCase

  public constructor(useCase: DeleteOfferUseCase) {
    this.deleteOfferUseCase = useCase
  }

  public executeImpl(offerId: Id): void {
    this.deleteOfferUseCase.execute(offerId)
  }
}
