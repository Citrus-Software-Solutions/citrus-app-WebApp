import { Review } from '../../../../domain/Review'

export interface CreateReviewUseCase {
  execute(review: Review): void
}
