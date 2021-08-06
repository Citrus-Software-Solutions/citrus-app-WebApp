import { Employer } from '@/job/domain/Employer'
import { Employee } from '../../Employee'
import { Application } from '../../Application'
import { Id } from '../../value-objects/Identifier'
import { Question, Scores } from '../../Review'
export type CreateReviewDTOUi = {
  questions: Question[]
  scores: Scores[]
  totalScore: number
}

export type CreateReviewDTOApp = CreateReviewDTOUi & {
  id: any
  employer: any
  employee: any
  application: any
}

export type CreateReviewDTOPersistence = {
  employeeId: any
  employerId: any
  applicationId: any
  questions: any
  scores: any
}
