import { CreateReviewDTOApp } from '@/job/domain/DTO/Review/CreateReviewDTO'

export interface CreateReviewUseCase {
  execute(review: CreateReviewDTOApp): void
}
