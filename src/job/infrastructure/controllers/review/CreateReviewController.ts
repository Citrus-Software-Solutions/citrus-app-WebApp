import { CreateReviewUseCase } from '@/job/application/use-cases/in/review/CreateReviewUseCase'
import { CreateReviewDTOUi } from '@/job/domain/DTO/review/CreateReviewDTO'
import { CreateReviewMapper } from '../../mappers/review/CreateReviewMapper'

export class CreateReviewController {
  private createReviewUseCase: CreateReviewUseCase

  public constructor(useCase: CreateReviewUseCase) {
    this.createReviewUseCase = useCase
  }

  public executeImpl(review: CreateReviewDTOUi): void {
    this.createReviewUseCase.execute(CreateReviewMapper.toApplication(review))
  }
}
