import { Id } from '@/job/domain/value-objects/Identifier'
import { req } from '@/shared/infrastructure/http'
import { Review } from '@/job/domain/Review'
import { ConsultReviewMapper } from '@/job/infrastructure/mappers/review/ConsultReviewMapper'
import { ConsultAllReviewsByApplicationPort } from '@/job/application/use-cases/out/review/ConsultAllReviewsByApplicationPort'

export class ConsultAllReviewsByApplicationAdapter
  implements ConsultAllReviewsByApplicationPort
{
  public async requestHandler(
    applicationId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: Review[]; success: boolean; error?: never }
  > {
    const apliId = ConsultReviewMapper.toPersistence(applicationId)
    const response = await req<Review[]>({
      url: `http://localhost:3000/review/${apliId}`,
      method: 'GET',
    })
    return response
  }
}
