import { PostOfferPort } from '../ports/out/PostOfferPort'
import { JobOffer } from '../../domain/JobOffer'
import { PostOfferUseCase } from '../ports/in/use-cases/PostOfferUseCase'
import { PostOfferCommand } from '../ports/in/PostOfferCommand'

export class PostOfferService implements PostOfferUseCase {
  postOfferPort: PostOfferPort

  constructor(postOfferPort: PostOfferPort) {
    this.postOfferPort = postOfferPort
  }

  public PostOffer(jobOffer: JobOffer): void {
    const postOfferCommand = new PostOfferCommand(jobOffer)

    if (postOfferCommand.isValid()) {
      this.postOfferPort.postOfferApi(jobOffer)
    } else {
      console.log('error')
    }
  }
}
