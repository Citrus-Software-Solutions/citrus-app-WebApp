import { CreateReviewUseCase } from '@/job/application/use-cases/in/review/CreateReviewUseCase'
import { CreateReviewDTOUi } from '../../../domain/DTO/Review/CreateReviewUI'

export class CreateReviewController {
  private creteReviewUseCase: CreateReviewUseCase

  constructor(creteReviewUseCase: CreateReviewUseCase) {
    this.creteReviewUseCase = creteReviewUseCase
  }

  //   public executeImpl(review: CreateReviewDTOUi): void {
  //     this.creteReviewUseCase.execute(review)
  //   }
}
