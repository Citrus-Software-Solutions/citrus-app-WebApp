import { DuplicateOfferPort } from '@/job/application/use-cases/out/DuplicateOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'
import { DuplicateOfferMapper } from '../../mappers/DuplicateOfferMapper'

export class DuplicateOfferAdapter implements DuplicateOfferPort {
  public async requestHandler(
    jobOffer: JobOffer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  > {
    console.log(DuplicateOfferMapper.toPersistence(jobOffer))
    const response = await req<JobOffer>({
      url: 'http://localhost:3000/jobs',
      method: 'POST',
      body: DuplicateOfferMapper.toPersistence(jobOffer),
    })
    return response
  }
}
