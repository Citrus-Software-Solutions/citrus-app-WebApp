import { PostOfferUseCase } from '../../application/use-cases/in/PostOfferUseCase'
import { JobOffer } from '../../domain/JobOffer'

export class AddJobController {
  public postOfferUseCase: PostOfferUseCase

  public constructor(useCase: PostOfferUseCase) {
    this.postOfferUseCase = useCase
  }

  public SubmitJobOffer(jobOffer: JobOffer): void {
    this.postOfferUseCase.PostOffer(jobOffer)
  }
}
