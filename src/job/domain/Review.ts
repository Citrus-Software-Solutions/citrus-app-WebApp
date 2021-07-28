import { Employee } from './Employee'
import { Application } from './Application'
import { Employer } from './Employer'
import { Id } from './value-objects/Identifier'

export interface _Review {
  id: Id //Added
  questions: string //son 5
  scores: number //FIXME:
  totalScore: number
  employee: Employee
  application: Application
  employer: Employer
}

export class Review {
  private id
  private questions
  private scores
  private totalScore
  private employee
  private application
  private employer

  constructor(props: _Review) {
    this.id = props.id
    this.questions = props.questions
    this.scores = props.scores
    this.totalScore = props.totalScore
    this.employee = props.employee
    this.application = props.application
    this.employer = props.employer
  }
}
