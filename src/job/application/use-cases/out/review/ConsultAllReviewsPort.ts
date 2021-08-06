import { Review } from '@/job/domain/Review'
import { Id } from '../../../../domain/value-objects/Identifier'

export interface ConsultAllReviewsPort {
  requestHandler(
    employerId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review; success: boolean; error?: never }
  >
}
