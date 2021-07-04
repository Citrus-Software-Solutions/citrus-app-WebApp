import { BasicJobOfferDTO } from '@/job-offer/domain/DTO/JobOfferDTO'
import { GetOfferPort } from '../../../../application/ports/out/GetOfferPort'
import { Id } from '../../../../domain/model/Shared'
import { JobOffer } from '../../../../domain/model/JobOffer'

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
