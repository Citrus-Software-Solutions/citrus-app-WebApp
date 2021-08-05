import { Question, Scores } from '../../Review'
import { Employee } from '../../Employee'
import { Application } from '../../Application'
import { Employer } from '@/job/domain/Employer'

export type CreateReviewDTOUi = {
  questions: Question[]
  scores: Scores[]
  totalScore: number
  employee: Employee
}

export type CreateReviewDTOPersistence = CreateReviewDTOUi & {
  employer: Employer
}

export type CreateReviewDTOApp = CreateReviewDTOPersistence & {
  application: Application
}
