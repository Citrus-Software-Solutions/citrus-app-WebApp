import { PostOfferUseCase } from '../../../application/ports/in/use-cases/PostOfferUseCase'

export class AddJobGUI {
  public postOfferUseCase: PostOfferUseCase

  //DIP
  public constructor(useCase: PostOfferUseCase) {
    this.postOfferUseCase = useCase
  }

  //implement interface event methods

  public SubmitJobOffer() {
    this.postOfferUseCase.PostOffer({ v1: 'att 1', v2: 'v2' })
  }
}
