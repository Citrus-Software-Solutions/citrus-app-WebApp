import { PublishOfferPort } from '@/job/application/use-cases/out/PublishOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'
import { PublishOfferMapper } from '../../mappers/PublishOfferMapper'

export class PublishOfferAdapter implements PublishOfferPort {
  public async requestHandler(
    jobOffer: JobOffer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  > {
    const _jobOffer = PublishOfferMapper.toPersistence(jobOffer)
    const response = await req<JobOffer>({
      url: process.env.VUE_APP_BASEURL + `job-offers/${_jobOffer.id}`,
      method: 'PUT',
      body: _jobOffer,
    })
    return response
  }
}
