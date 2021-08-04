import { Id } from '@/job/domain/value-objects/Identifier'
import { req } from '@/shared/infrastructure/http'
import { Review } from '@/job/domain/Review'
import { ConsultReviewPort } from '@/job/application/use-cases/out/review/ConsultReviewPort'
import { ConsultReviewMapper } from '@/job/infrastructure/mappers/review/ConsultReviewMapper'

export class ConsultReviewAdapter implements ConsultReviewPort {
  public async requestHandler(
    applicationId: Id,
    employeeId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review; success: boolean; error?: never }
  > {
    const apliId = ConsultReviewMapper.toPersistence(applicationId)
    const empId = employeeId
    const response = await req<Review>({
      url: `http://localhost:3000/review/${apliId}/${empId}`,
      method: 'GET',
    })
    return response
  }
}
