import { CreateReviewUseCase } from '@/job/application/use-cases/in/review/CreateReviewUseCase'
import {
  CreateReviewDTOApp,
  CreateReviewDTOUi,
} from '../../../domain/DTO/Review/CreateReviewDTO'
import { CreateReviewMapper } from '@/job/infrastructure/mappers/review/CreateReviewMapper'
import { Application } from '../../../domain/Application'
import { Review } from '@/job/domain/Review'
import { CreateOfferDTOApp } from '../../../domain/DTO/CreateOfferDto'

export class CreateReviewController {
  private creteReviewUseCase: CreateReviewUseCase

  constructor(creteReviewUseCase: CreateReviewUseCase) {
    this.creteReviewUseCase = creteReviewUseCase
  }

  public executeImpl(
    review: CreateReviewDTOApp,
    application: Application
  ): void {
    this.creteReviewUseCase.execute(
      CreateReviewMapper.toApplication(review, application)
    )
  }
}
