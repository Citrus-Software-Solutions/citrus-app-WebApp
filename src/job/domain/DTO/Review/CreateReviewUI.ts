import { Question, Scores } from '../../Review'
import { Employee } from '../../Employee'
import { Employer } from '../../Employer'
import { Id } from '../../value-objects/Identifier'

export type CreateReviewDTOUi = {
  questions: Question[]
  score: Scores
  totalScore: number
  employee: Employee
}

export type CreateReviewDTOPersistence = CreateReviewDTOUi & {
  employer: Employer
}

export type CreateReviewDTOApp = CreateReviewDTOPersistence & {
  id: Id
}
