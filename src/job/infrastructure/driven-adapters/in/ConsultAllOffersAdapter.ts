import { ConsultAllOffersPort } from '@/job/application/use-cases/out/ConsultAllOffersPort'
import { Id } from '@/job/domain/value-objects/Identifier'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'

export class ConsultAllOffersAdapter implements ConsultAllOffersPort {
  public async requestHandler(
    employerId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  > {
    const response = await req<JobOffer>({
      url: process.env.VUE_APP_BASEURL + 'job-offers/employers/1',
      method: 'GET',
    })
    return response
  }
}
