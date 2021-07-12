import { GetOfferPort } from '../../../application/use-cases/out/GetOfferPort'
import { Id } from '../../../domain/Identifier'
import { JobOffer } from '../../../domain/JobOffer'

export class GetOfferAdapter implements GetOfferPort {
  async fetchData<T>(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return (await response.json()) as T
  }

  async requestHandler(id: Id): Promise<JobOffer> {
    const response = await this.fetchData<any>('http://localhost:3000/jobs')
    return response
  }
}
