import { ConsultAllReviewsUseCase } from '@/job/application/use-cases/in/review/ConsultAllReviewsUseCase'
import { ConsultAllReviewsDTOUi } from '@/job/domain/DTO/review/ConsultAllReviewsDTO'

export class ConsultAllReviewsController {
  private consultAllReviews: ConsultAllReviewsUseCase

  constructor(consultAllReviewsUseCase: ConsultAllReviewsUseCase) {
    this.consultAllReviews = consultAllReviewsUseCase
  }

  public executeImpl(employerId: ConsultAllReviewsDTOUi): void {
    this.consultAllReviews.execute(employerId)
  }
}
