import { Id } from '@/job/domain/value-objects/Identifier'
import { req } from '@/shared/infrastructure/http'
import { ConsultAllReviewsPort } from '@/job/application/use-cases/out/review/ConsultAllReviewsPort'
import { Review } from '@/job/domain/Review'

export class ConsultAllReviewsAdapter implements ConsultAllReviewsPort {
  public async requestHandler(
    employerId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review; success: boolean; error?: never }
  > {
    const response = await req<Review>({
      url: 'https://dry-scrubland-34976.herokuapp.com/http://prueba-ds.herokuapp.com/review/employer/1',
      method: 'GET',
    })
    return response
  }
}
