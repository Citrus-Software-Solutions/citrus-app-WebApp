import { Id } from '@/job/domain/value-objects/Identifier'
import { JobOffer } from '@/job/domain/JobOffer'
import { req } from '@/shared/infrastructure/http'
import { ConsultAllReviewsPort } from '@/job/application/use-cases/out/review/ConsultAllReviewsPort'
import { Review } from '@/job/domain/Review'

export class ConsultAllReviewsAdapter implements ConsultAllReviewsPort {
  public async requestHandler(
    employerId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review[]; success: boolean; error?: never }
  > {
    const response = await req<Review[]>({
      url: process.env.VUE_APP_BASEURL_SPRING + `review/employer/${employerId}`,
      method: 'GET',
    })
    return response
  }
}
