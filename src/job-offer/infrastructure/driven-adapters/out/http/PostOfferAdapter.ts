import { PostOfferPort } from '@/job-offer/application/ports/out/PostOfferPort'
import { JobOffer } from '@/job-offer/domain/JobOffer'

export class PostOfferAdapter implements PostOfferPort {
  async postOfferApi(jobOffer: JobOffer): Promise<void> {
    await fetch('http://localhost:8081/JobOffer', {
      //se debe cambiar a la ruta para post
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
