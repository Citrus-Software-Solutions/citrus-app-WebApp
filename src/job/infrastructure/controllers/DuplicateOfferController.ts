import { DuplicateOfferDTOUi } from '@/job/domain/DTO/DuplicateOfferDto'
import { DuplicateOfferUseCase } from '@/job/application/use-cases/in/DuplicateOfferUseCase'

export class DuplicateOfferController {
  private duplicateOfferUseCase: DuplicateOfferUseCase

  constructor(duplicateOfferUseCase: DuplicateOfferUseCase) {
    this.duplicateOfferUseCase = duplicateOfferUseCase
  }

  public executeImpl(offerId: DuplicateOfferDTOUi): void {
    this.duplicateOfferUseCase.execute(offerId)
  }
}
