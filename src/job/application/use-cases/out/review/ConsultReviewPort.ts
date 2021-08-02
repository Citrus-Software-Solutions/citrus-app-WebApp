import { Review } from '@/job/domain/Review'
import { Employee } from '../../../../domain/Employee'
import { Application } from '../../../../domain/Application'
import { Employer } from '@/job/domain/Employer'

export interface ConsultReviewPort {
  requestHandler(
    employee: Employee,
    employer: Employer,
    application: Application
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review; success: boolean; error?: never }
  >
}
