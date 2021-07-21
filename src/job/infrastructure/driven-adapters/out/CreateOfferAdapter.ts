import { CreateOfferPort } from '@/job/application/use-cases/out/CreateOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'

export class CreateOfferAdapter implements CreateOfferPort {
  public async requestHandler(
    jobOffer: JobOffer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  > {
    const response = await req<JobOffer>({
      url: 'http://localhost:3000/jobs',
      method: 'POST',
      body: jobOffer,
    })
    return response
  }
}
