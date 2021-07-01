import { PostOfferPort } from '@/job-offer/application/ports/out/PostOfferPort'
import { JobOffer } from '@/job-offer/domain/JobOffer'

export class PostOfferAdapter implements PostOfferPort {
  async postOfferApi(jobOffer: JobOffer): Promise<void> {
    await fetch('http://localhost:3000/jobs', {
      method: 'POST',
      body: JSON.stringify(jobOffer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => console.log(err))
  }
}
