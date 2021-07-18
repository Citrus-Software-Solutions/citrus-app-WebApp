import { CreateOfferUseCase } from '../../application/use-cases/in/CreateOfferUseCase'
import { JobOffer } from '../../domain/JobOffer'

export class CreateOfferController {
  public createOfferUseCase: CreateOfferUseCase

  public constructor(useCase: CreateOfferUseCase) {
    this.createOfferUseCase = useCase
  }

  public executeImpl(jobOffer: JobOffer): void {
    this.createOfferUseCase.execute(jobOffer)
  }
}
