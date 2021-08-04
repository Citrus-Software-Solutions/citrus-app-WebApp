import { Review } from '@/job/domain/Review'
import { Id } from '../../../../domain/value-objects/Identifier'

export interface ConsultReviewPort {
  requestHandler(
    applicationId: Id,
    employeeId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review; success: boolean; error?: never }
  >
}
