import { DeleteOfferPort } from '@/job/application/use-cases/out/DeleteOfferPort'
import { Id } from '@/job/domain/Identifier'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'

export class DeleteOfferAdapter implements DeleteOfferPort {
  public async requestHandler(
    offerId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  > {
    const response = await req<JobOffer>({
      url: `http://localhost:3000/jobs/${offerId}`,
      method: 'DELETE',
    })
    return response
  }
}
