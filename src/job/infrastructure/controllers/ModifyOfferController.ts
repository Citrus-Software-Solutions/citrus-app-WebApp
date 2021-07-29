import { ModifyOfferUseCase } from '../../application/use-cases/in/ModifyOfferUseCase'
import { ModifyOfferDTO } from '../../domain/DTO/ModifyOfferDTO'
import { ModifyOfferMapper } from '../mappers/ModifyOfferMapper'
export class ModifyOfferController {
  public modifyOfferUseCase: ModifyOfferUseCase

  public constructor(useCase: ModifyOfferUseCase) {
    this.modifyOfferUseCase = useCase
  }

  public executeImpl(jobOffer: ModifyOfferDTO): void {
    this.modifyOfferUseCase.execute(ModifyOfferMapper.toApplication(jobOffer))
  }
}
