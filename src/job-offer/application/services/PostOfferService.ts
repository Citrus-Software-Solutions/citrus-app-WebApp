import { PostOfferPort } from '../ports/out/PostOfferPort'
import { JobOffer } from '../../domain/JobOffer'
import { BasicJobOfferDTO } from '@/job-offer/domain/DTO/JobOfferDTO'
import { PostOfferUseCase } from '../ports/in/use-cases/PostOfferUseCase'

export class PostOfferService implements PostOfferUseCase {
  postOfferPort: PostOfferPort

  constructor(postOfferPort: PostOfferPort) {
    this.postOfferPort = postOfferPort
  }

  public PostOffer(jobOffer: JobOffer): Promise<BasicJobOfferDTO> {
    const response = this.postOfferPort.postOfferApi(jobOffer)
    console.log(response)
    return response
  }
}
