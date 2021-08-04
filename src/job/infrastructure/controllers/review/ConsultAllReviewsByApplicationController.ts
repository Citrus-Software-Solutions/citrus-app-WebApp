import { ConsultAllReviewsByApplicationUseCase } from '@/job/application/use-cases/in/review/ConsultAllReviewsByApplicationUseCase'
import { ConsultAllReviewsByApplicationDTOUi } from '@/job/domain/DTO/Review/ConsultAllReviewsByApplicationDTOUi'

export class ConsultAllReviewsByApplicationController {
  private consultAllReviewsByApplicationUseCase: ConsultAllReviewsByApplicationUseCase

  constructor(consultAllReviewsUseCase: ConsultAllReviewsByApplicationUseCase) {
    this.consultAllReviewsByApplicationUseCase = consultAllReviewsUseCase
  }

  public executeImpl(
    employerId: ConsultAllReviewsByApplicationDTOUi,
    applicationId: ConsultAllReviewsByApplicationDTOUi
  ): void {
    this.consultAllReviewsByApplicationUseCase.execute(
      employerId,
      applicationId
    )
  }
}
