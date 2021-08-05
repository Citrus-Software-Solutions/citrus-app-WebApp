import { ConsultReviewDTOUi } from '@/job/domain/DTO/review/ConsultReviewDTO'
import { Id } from '@/job/domain/value-objects/Identifier'

export class ConsultReviewMapper {
  public static toPersistence(applicationId: Id): ConsultReviewDTOUi {
    return applicationId._id
  }
}
