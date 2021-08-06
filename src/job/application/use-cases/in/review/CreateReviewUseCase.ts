import { CreateReviewDTOApp } from '../../../../domain/DTO/review/CreateReviewDTO'

export interface CreateReviewUseCase {
  execute(review: CreateReviewDTOApp): void
}
