import { ConsultOfferPort } from '@/job/application/use-cases/out/ConsultOfferPort'
import { Id } from '@/job/domain/value-objects/Identifier'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'
import { ConsultOfferMapper } from '../../mappers/ConsultOfferMapper'

export class ConsultOfferAdapter implements ConsultOfferPort {
  public async requestHandler(
    offerId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  > {
    const id = ConsultOfferMapper.toPersistence(offerId)
    const response = await req<JobOffer>({
      url: `http://localhost:3000/jobs/${id}`,
      method: 'GET',
    })
    return response
  }
}
