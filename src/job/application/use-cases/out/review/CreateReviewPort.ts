import { Review } from '@/job/domain/Review'

export interface CreateReviewPort {
  requestHandler(
    review: Review
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review; success: boolean; error?: never }
  >
}
