import { PostOfferPort } from '@/job-offer/application/ports/out/PostOfferPort'
import { BasicJobOfferDTO } from '@/job-offer/domain/DTO/JobOfferDTO'
import { JobOffer } from '@/job-offer/domain/JobOffer'

export class PostOfferAdapter implements PostOfferPort {
  async postOfferApi(joboffer: JobOffer): Promise<BasicJobOfferDTO> {
    console.log(joboffer)
    const jobOfferResponse = <BasicJobOfferDTO>(<unknown>await fetch(
      'http://localhost:3000/jobs',
      {
        method: 'POST',
        body: JSON.stringify(joboffer),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      }))

    return jobOfferResponse
  }
}
