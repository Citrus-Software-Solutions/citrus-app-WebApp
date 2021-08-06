import { CreateReviewPort } from '@/job/application/use-cases/out/review/CreateReviewPort'
import { Review } from '@/job/domain/Review'
import { CreateReviewMapper } from '@/job/infrastructure/mappers/review/CreateReviewMapper'
import { req } from '@/shared/infrastructure/http'

export class CreateReviewAdapter implements CreateReviewPort {
  public async requestHandler(
    review: Review
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review; success: boolean; error?: never }
  > {
    const response = await req<Review>({
      url: 'https://dry-scrubland-34976.herokuapp.com/http://prueba-ds.herokuapp.com/review',
      method: 'POST',
      body: CreateReviewMapper.toPersistence(review),
    })
    return response
  }
}
