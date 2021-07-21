import { ModifyOfferPort } from '@/job/application/use-cases/out/ModifyOfferPort'
import { _JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'

export class ModifyOfferAdapter implements ModifyOfferPort {
  public async requestHandler(
    jobOffer: _JobOffer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: _JobOffer; success: boolean; error?: never }
  > {
    const response = await req<_JobOffer>({
      url: 'http://localhost:3000/jobs/' + jobOffer.id,
      method: 'PUT',
      body: jobOffer,
    })
    return response
  }
}
