import {
  CreateReviewDTOApp,
  CreateReviewDTOPersistence,
  CreateReviewDTOUi,
} from '@/job/domain/DTO/review/CreateReviewDTO'

import { store } from '@/common-infrastructure/store'
import { Review } from '@/job/domain/Review'
import { Application, _Application } from '../../../domain/Application'
import { Id } from '@/job/domain/value-objects/Identifier'

export class CreateReviewMapper {
  public static toApplication(review: CreateReviewDTOUi): CreateReviewDTOApp {
    const employer = store.getters.getUser
    return {
      questions: review.questions,
      scores: review.scores,
      totalScore: review.totalScore,
      employer: employer,
      id: '',
      employee: '',
      application: '',
    }
  }

  public static toPersistence(review: Review): CreateReviewDTOPersistence {
    const employer = store.getters.getUser
    return {
      questions: review._questions,
      scores: review._scores,
      employeeId: review._employee._id,
      employerId: employer._id,
      applicationId: review._application._id,
    }
  }
}
