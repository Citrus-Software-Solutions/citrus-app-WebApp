import { DuplicateOfferPort } from '@/job/application/use-cases/out/DuplicateOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'
import { DuplicateOfferMapper } from '../../mappers/DuplicateOfferMapper'
import { store } from '@/common-infrastructure/store'

export class DuplicateOfferAdapter implements DuplicateOfferPort {
  public async requestHandler(
    jobOffer: JobOffer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  > {
    const { id } = store.getters.getUser
    const response = await req<JobOffer>({
      url: process.env.VUE_APP_BASEURL + `job-offers/${id}`,
      method: 'POST',
      body: DuplicateOfferMapper.toPersistence(jobOffer),
    })
    return response
  }
}
