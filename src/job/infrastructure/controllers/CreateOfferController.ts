import { CreateOfferUseCase } from '../../application/use-cases/in/CreateOfferUseCase'
import { CreateOfferDTOUi } from '../../domain/DTO/CreateOfferDto'
import { CreateOfferMapper } from '../mappers/CreateOfferMapper'

export class CreateOfferController {
  private createOfferUseCase: CreateOfferUseCase

  public constructor(useCase: CreateOfferUseCase) {
    this.createOfferUseCase = useCase
  }

  public executeImpl(jobOffer: CreateOfferDTOUi): void {
    this.createOfferUseCase.execute(CreateOfferMapper.toApplication(jobOffer))
  }
}
