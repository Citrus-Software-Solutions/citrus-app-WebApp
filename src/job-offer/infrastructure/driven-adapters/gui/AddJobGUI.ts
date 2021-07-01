import { PostOfferUseCase } from '../../../application/ports/in/use-cases/PostOfferUseCase'
import { JobOffer } from '../../../domain/JobOffer'

export class AddJobGUI {
  public postOfferUseCase: PostOfferUseCase

  //DIP
  public constructor(useCase: PostOfferUseCase) {
    this.postOfferUseCase = useCase
  }

  //implement interface event methods

  public SubmitJobOffer(jobOffer: JobOffer) {
    this.postOfferUseCase.PostOffer(jobOffer)
  }
}
