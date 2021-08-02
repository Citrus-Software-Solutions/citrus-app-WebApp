import { Review } from '@/job/domain/Review'
import { Application } from '../../../../domain/Application'
import { Employer } from '../../../../domain/Employer'

export interface ConsultAllReviewsByApplicationPort {
  requestHandler(
    application: Application,
    employer: Employer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review[]; success: boolean; error?: never }
  >
}
