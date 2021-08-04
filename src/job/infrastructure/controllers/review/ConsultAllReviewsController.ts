import { ConsultAllReviewsDTOUi } from '../../../domain/DTO/Review/ConsultAllReviewsDTOUi'
import { ConsultAllReviewsUseCase } from '@/job/application/use-cases/in/review/ConsultAllReviewsUseCase'

export class ConsultAllReviewsController {
  private consultAllReviewsUseCase: ConsultAllReviewsUseCase

  constructor(consultAllReviewsUseCase: ConsultAllReviewsUseCase) {
    this.consultAllReviewsUseCase = consultAllReviewsUseCase
  }

  public executeImpl(employerId: ConsultAllReviewsDTOUi): void {
    this.consultAllReviewsUseCase.execute(employerId)
  }
}
