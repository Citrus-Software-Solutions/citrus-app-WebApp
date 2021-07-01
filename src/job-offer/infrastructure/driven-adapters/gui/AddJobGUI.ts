import { PostOfferUseCase } from '../../../application/ports/in/use-cases/PostOfferUseCase'
import { JobOffer } from '../../../domain/JobOffer'

export class AddJobGUI {
  public postOfferUseCase: PostOfferUseCase

  public constructor(useCase: PostOfferUseCase) {
    this.postOfferUseCase = useCase
  }

  public SubmitJobOffer(jobOffer: JobOffer): void {
    this.postOfferUseCase.PostOffer(jobOffer)
  }
}
