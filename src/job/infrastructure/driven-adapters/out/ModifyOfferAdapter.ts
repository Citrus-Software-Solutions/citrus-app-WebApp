import { ModifyOfferPort } from '@/job/application/use-cases/out/ModifyOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'
import { ModifyOfferMapper } from '../../mappers/ModifyOfferMapper'

export class ModifyOfferAdapter implements ModifyOfferPort {
  public async requestHandler(
    jobOffer: JobOffer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  > {
    const _jobOffer = ModifyOfferMapper.toPersistence(jobOffer)
    const response = await req<JobOffer>({
      url: 'http://localhost:3000/jobs/' + _jobOffer.id,
      method: 'PUT',
      body: _jobOffer,
    })
    return response
  }
}
