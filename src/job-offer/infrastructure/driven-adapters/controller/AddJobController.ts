import { PostOfferUseCase } from '../../../application/ports/in/use-cases/PostOfferUseCase'
import { JobOfferDTO } from '../../../domain/DTO/JobOfferDTO'

export class AddJobController {
  public postOfferUseCase: PostOfferUseCase

  public constructor(useCase: PostOfferUseCase) {
    this.postOfferUseCase = useCase
  }

  public SubmitJobOffer(jobOffer: JobOfferDTO): void {
    this.postOfferUseCase.PostOffer(jobOffer)
  }
}
