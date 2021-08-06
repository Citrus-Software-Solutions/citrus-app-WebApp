import { CreateOfferPort } from '@/job/application/use-cases/out/CreateOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'
import { CreateOfferMapper } from '../../mappers/CreateOfferMapper'

export class CreateOfferAdapter implements CreateOfferPort {
  public async requestHandler(
    jobOffer: JobOffer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  > {
    const { employer, ...body } = CreateOfferMapper.toPersistence(jobOffer)
    const response = await req<JobOffer>({
      url: process.env.VUE_APP_BASEURL + `job-offers/${employer.id}`,
      method: 'POST',
      body: body,
    })
    return response
  }
}
