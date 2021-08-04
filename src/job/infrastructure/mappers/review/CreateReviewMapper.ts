import {
  CreateReviewDTOApp,
  CreateReviewDTOPersistence,
  CreateReviewDTOUi,
} from '@/job/domain/DTO/review/CreateReviewDTO'

import { store } from '@/common-infrastructure/store'
import { Review } from '@/job/domain/Review'
import { Application, _Application } from '../../../domain/Application'

export class CreateReviewMapper {
  public static toApplication(
    review: CreateReviewDTOApp,
    application: Application
  ): CreateReviewDTOApp {
    const employer = store.getters.getUser
    return {
      questions: review.questions,
      scores: review.scores,
      totalScore: review.totalScore,
      employee: review.employee,
      employer: employer,
      application: application,
    }
  }

  // public static toPersistence(review: Review): CreateReviewDTOPersistence {
  //   return {
  //     questions: review._questions,
  //     scores: review._scores,
  //     totalScore: review._totalScore,
  //     employee: review._employee,
  //     employer: review._employer,
  //     application: review._application

  //   }
  // }
}
